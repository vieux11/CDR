const mongoose=require("mongoose")
async function connection() {
    try {
      await mongoose.connect(process.env.DB);
      console.log("la connexion BD est un succès");
    } catch (e) {
      console.log({ dberror: e });
    }
  }
  module.exports = connection;