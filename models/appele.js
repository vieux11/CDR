const mongoose=require("mongoose");
const appeleSchema = new mongoose.Schema({
    abonne: { type: mongoose.Schema.Types.ObjectId, ref: 'Abonne' }
  });
module.exports=mongoose.model("Appele", appeleSchema);