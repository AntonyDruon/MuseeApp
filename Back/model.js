const { Schema , model, Types } = require("mongoose")

const oeuvreSchema = new Schema({
        nom : String,
        description : String,
        image : String,
        auteur : String,
        dt_creation : String,
        commentaires : [{type : Types.ObjectId, ref : "commentaires"}]
        
});
const Oeuvre = model("oeuvres", oeuvreSchema);


const userSchema = new Schema({
        pseudo : String,
        email : String ,  // 123@yahoo.fr
        password : String ,
        role : { type : String , enum : ['visiteur' , 'admin'] }
    
});
const User = model("users",userSchema);

const commentaireSchema = new Schema ({
    auteur : { type : Types.ObjectId , ref : "users"},
    contenu : String,
    dt_creation : {type: Date , default : Date.now()}
});
const Commentaire = model("commentaires", commentaireSchema)

module.exports.Oeuvre = Oeuvre;
module.exports.User = User;
module.exports.Commentaire = Commentaire;


