const mongoose=require("mongoose");
const appelSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  heure: { type: String, default: () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  } },
    duree: Number,
    type: String,
    appelant: { type: mongoose.Schema.Types.ObjectId, ref: 'Appelant' },
    appele: { type: mongoose.Schema.Types.ObjectId, ref: 'Appele' },
    tarif: Number,
    statut:String
  });
  
  // fonction pour calculer le tarif en fonction de la durée de l'appel
  appelSchema.pre('save', function(next) {
    if (this.statut === "manque"){
      this.duree = null;
      this.tarif = null;
    }
    const tarifParMinute = 0.5; // tarif par minute
    this.tarif = this.duree * tarifParMinute;
    next();
  });
  module.exports =mongoose.model('Appel', appelSchema);