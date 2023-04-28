const express = require("express")
const {connect} = require("mongoose");
const route = require("./route-oeuvre")
const routeUser = require("./route-user")
const routeConnexion = require("./route-connexion")
const routeCommentaire = require("./route-commentaire")
require("dotenv").config();

const URI = process.env.NODE_ENV === "production" ? process.env.BDD_PROD : process.env.BDD_DEV
connect(URI)
    .then(() => console.log("connexion à MongoDB réussie"))
    .catch((ex) => console.log(ex))

const PORT = 4003 ;

const app = express()

app.use(express.json()) ;
app.use(routeConnexion); 
app.use(route) ;
app.use("/user" ,routeUser)
app.use("/commentaire", routeCommentaire) // middleware 
app.listen(PORT , () => console.log(`express start sur port ${PORT}`));