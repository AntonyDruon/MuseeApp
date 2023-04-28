const { Router } = require("express")
const { Oeuvre, Commentaire } = require("./model")
const {idValid ,isValidOeuvre,isValidCommentaire, autorisation,isValidLogin , isAdmin } = require("./middleware")

const route = Router();

// route.get("/", function (request, reponse){
//     reponse.json({msg : "fonction"})
// })
route.post("/" ,[autorisation, isAdmin],  async function(request, reponse){
    const { body } = request; 
    const newOeuvre = new Oeuvre({...body}) 
    await newOeuvre.save() 
    reponse.json(newOeuvre); 
})
route.get("/all" , async (request, reponse) => {
    const touteLesOeuvre = await Oeuvre.find()
    reponse.json(touteLesOeuvre); 
 })
 route.get("/:id" , async (request, reponse) => {
    id = request.params.id
    const OeuvreById = await Oeuvre.findById(id)
    reponse.json(OeuvreById); 
 })





 route.delete("/:id" , [autorisation, isAdmin , idValid] ,  async (request, reponse) => {
    const id = request.params.id ;
    const reponseMongo = await Oeuvre.findByIdAndRemove(id) // DELETE 

    if(!reponseMongo) return reponse.status(404).json({ msg : `la console ${id} n'existe pas` })

    reponse.json({ msg : `la console ${id} est bien supprimé` }); 
});
route.put("/:id" , [ isAdmin,idValid, isValidOeuvre ] , async (request , reponse) => {
    const id = request.params.id ;
    const { body } = request ;
  
    const OeuvreUpdated = await Oeuvre.findByIdAndUpdate(id , { $set : body } , { new : true})
    if(!OeuvreUpdated) return reponse.status(404).json({ msg : `l'Oeuvre ${id} n'existe pas` }) ; 

    reponse.json(OeuvreUpdated)
})

module.exports = route ; 