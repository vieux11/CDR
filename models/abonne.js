const mongoose=require("mongoose")
const abonneSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    numeroTel: String
  });
 module.exports =  mongoose.model('Abonne', abonneSchema);