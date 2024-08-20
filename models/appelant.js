const mongoose=require("mongoose");
const appelantSchema = new mongoose.Schema({
    abonne: { type: mongoose.Schema.Types.ObjectId, ref: 'Abonne' }
  });
  module.exports = mongoose.model('Appelant', appelantSchema);