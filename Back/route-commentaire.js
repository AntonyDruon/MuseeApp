const { Router, response } = require("express")
const { Commentaire, Oeuvre} = require("./model")  
const {isValidCommentaire, autorisation , isAdmin, idValid } = require("./middleware")

const route = Router()

// création d'un commentaire et push dans le tableau de l'oeuvre
route.post("/:idOeuvre",[autorisation,isValidCommentaire,idValid], async(request,reponse) => {
   // création commentaire
    const { body } = request; 
    const idOeuvre = request.params.idOeuvre
    const newCommentaire = new Commentaire({...body})
    await newCommentaire.save() 
    // associer le commentaire crée a une oeuvre existante
    const OeuvreACommenter = await Oeuvre.findById(idOeuvre)
    OeuvreACommenter.commentaires.push(newCommentaire._id)
    await OeuvreACommenter.save()
    reponse.json(newCommentaire); 
});
// Récupérer les commentaires par rapport aux oeuvres
route.get("/:idOeuvre", idValid , async (request, reponse) => {
    const idOeuvre = request.params.idOeuvre
    const resultat = await Oeuvre.findById(idOeuvre).populate('commentaires')
    reponse.json(resultat); 
 });
// récupérer tout les commentaires d'un utilisateur
route.get('/:idUtilisateur',[autorisation,isAdmin,idValid], async (request,reponse) => {
    const idUtilisateur = request.params.idUtilisateur
    const commentaireUtilisateur = await Commentaire.find({auteur : idUtilisateur})
    reponse.json(commentaireUtilisateur)
})
// supprimer un commentaire
route.delete("/:idCommentaire", [autorisation, isAdmin,idValid],async (request , reponse) => {
    const idCommentaire = request.params.idCommentaire ;
    const commentaireASupprimer = await Commentaire.findByIdAndRemove(idCommentaire)
    if(!commentaireASupprimer) return reponse.status(404).json({msg : `Commentaire introuvable avec l'id mentionné : ${idCommentaire}`})
    reponse.json({msg : `Commentaire ${idCommentaire} est supprimé`})
})

module.exports = route;