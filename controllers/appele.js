const Appele=require("../models/appele");
exports.createAppele=async (req,res)=>{
    try {
        const appele= await Appele.create(req.body);
        console.log(appele)
        return res.status(201).json(appele);
    } catch (error) {
     return res.status(500).json({error:error.message});
    }
}
exports.getAllAppele = async (req, res) => {
    try {
      const appeles = await Appele.find()
        .populate({
          path: 'abonne',
          select: 'nom numeroTel' // include only nom and numeroTel fields
        });
      return res.json(appeles);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }