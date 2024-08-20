const Appel = require('../models/appel');

exports.getAllAppels = async (req, res) => {
  try {
    const appels = await Appel.find()
    .populate({
        path : "appelant",
        populate: { path: 'abonne', select:"nom numeroTel"}})
    .populate({
        path : "appele", 
        populate: { path: 'abonne', select:"nom numeroTel"}})
    res.json(appels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAppelById = async (req, res) => {
  try {
    const appel = await Appel.findById(req.params.id)
    .populate({path : "appelant", select:"nom numeroTel"})
    .populate({path : "appele", select:"nom numeroTel"});
    if (!appel) {
      res.status(404).json({ message: 'Appel pas trouvé' });
    } else {
      res.json(appel);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.saveAppel = async (req, res) => {
  try {
    const appel = new Appel(req.body);
    await appel.save();
    res.json(appel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
