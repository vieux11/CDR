const express = require('express');
const router = express.Router();
const {
    getAllAbonnes,
    getAbonneById,
    createAbonne,
    updateAbonne,
    deleteAbonne,
} = require('../controllers/abonne');

router.get('/abonnes/', getAllAbonnes);
router.get('/abonne/:id', getAbonneById);
router.post('/abonne', createAbonne);
router.put('/abonne/:id', updateAbonne);
router.delete('/abonne/:id', deleteAbonne);

module.exports = router;