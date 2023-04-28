const Joi = require('joi')
    .extend(require('@joi/date'));

const schemaUserJoi = Joi.object({
    pseudo : Joi.string().min(5).max(255).required(),
    email : Joi.string().max(255).email({ tlds: { allow: false } }).required(),
    password : Joi.string().max(255).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required(),
    role : Joi.string().valid("visiteur","admin").required(),
    
});
const schemaLogin = Joi.object({
    
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password : Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required()
});

const schemaOeuvreJoi = Joi.object({ 
    nom : Joi.string().min(5).max(255).required(),
    description : Joi.string().min(5).max(10000).required(),
    image: Joi.string().min(0).required(),
    dt_creation : Joi.string().min(5).max(255).required(),
})
const schemaCommentaireJoi = Joi.object({
    contenu : Joi.string().max(255).required(),
    dt_creation : Joi.date().format('DD-MM-YYYY').utc()
})

module.exports.schemaCommentaireJoi = schemaCommentaireJoi;
module.exports.schemaUserJoi = schemaUserJoi;
module.exports.schemaLogin = schemaLogin;
module.exports.schemaOeuvreJoi = schemaOeuvreJoi;