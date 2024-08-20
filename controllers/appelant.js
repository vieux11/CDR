const Appelant=require("../models/appelant");
exports.createAppelant=async (req,res)=>{
    try {
        const appelant= await Appelant.create(req.body);
        return res.status(201).json(appelant);
    } catch (error) {
     return res.status(500).json({error:error.message});
    }
}
exports.getAllAppelant = async (req, res) => {
    try {
      const appelants = await Appelant.find()
        .populate({
          path: 'abonne',
          select: 'nom numeroTel' // include only nom and numeroTel fields
        });
      return res.json(appelants);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }