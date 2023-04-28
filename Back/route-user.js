const { Router, response } = require("express")
const { User } = require("./model") 
const { schemaUserJoi } = require("./verif") 
const {genSalt , hash } = require("bcrypt"); 
const {idValid ,isValidOeuvre,isValidCommentaire, autorisation,isValidLogin , isAdmin } = require("./middleware")
const { isValidObjectId } = require("mongoose")

const route = Router()

// ajouter un nouveau utilisateur
route.post("/", async (request, reponse) => {

    const {body} = request 
    const {error} = schemaUserJoi.validate(body , {abortEarly : false})
    if(error) return reponse.status(400).json(error.details)
   
    const userRecherche = await User.find({$or : [{email : body.email}, {pseudo : body.pseudo}]}) 
   
    if(userRecherche.length > 0) return reponse.status(400).json({ msg : "email ou pseudo déjà pris" });
  
    const salt = await genSalt(10)
    const passwordHashe = await hash(body.password , salt)
   
    const userACreer = new User({ ...body , password : passwordHashe }) 
    await userACreer.save() 

   reponse.json({msg : "profil créé"}) 
})

// récupérer tout les utilisateurs
route.get("/alluser" ,[autorisation,isValidLogin, isAdmin], async (request , reponse) => {
    const allUsers = await User.find({}).select({ pseudo: 1 , email : 1 })
    reponse.json(allUsers); 
})

// delete un utilisateurs
route.delete("/:id", [autorisation,isValidObjectId,isAdmin],async (request , reponse) => {
    const id = request.params.id ;
    const profilASupprimer = await User.findByIdAndRemove(id)
    if(!profilASupprimer) return reponse.status(404).json({msg : `Profil introuvable avec l'id mentionné : ${id}`})
    reponse.json({msg : `profil ${id} est supprimé`})
})

//Modifier un utilisateur
route.put("/:id" , [ autorisation,isAdmin,idValid,  ] , async (request , reponse) => {
    const id = request.params.id ;
    const { body } = request ;
    const UsersUpdated = await User.findByIdAndUpdate(id , { $set : body } , { new : true})
    if(!UsersUpdated) return reponse.status(404).json({ msg : `l'utilisateur ${id} n'existe pas` }) ; 

    reponse.json(UsersUpdated)
})
module.exports = route ;