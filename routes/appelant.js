const express=require("express")
const router=express.Router();
const {
   getAllAppelant,
   createAppelant 
} = require("../controllers/appelant")
router.get('/appelants', getAllAppelant)
router.post('/appelant', createAppelant)
module.exports = router;