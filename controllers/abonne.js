const Abonne = require('../models/abonne');

exports.getAllAbonnes = async (req, res) => {
  try {
    const abonnes = await Abonne.find();
    res.json(abonnes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAbonneById = async (req, res) => {
  try {
    const abonne = await Abonne.findById(req.params.id);
    if (!abonne) {
      res.status(404).json({ message: 'Abonne not found' });
    } else {
      res.json(abonne);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAbonne = async (req, res) => {
  const { nom,  prenom, numeroTel} = req.body;
  try {
      const abonne = await Abonne.create({
      nom: nom,
      prenom: prenom,
      numeroTel: numeroTel
    });
  return res.status(201).json({ msg: "creation reussie", data: abonne });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAbonne = async (req, res) => {
  try {
    const abonne = await Abonne.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!abonne) {
      res.status(404).json({ message: 'Abonne pas trouvé' });
    } else {
      res.json(abonne);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAbonne = async (req, res) => {
  try {
    await Abonne.findByIdAndDelete(req.params.id);
    res.json({ message: 'Abonne supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};