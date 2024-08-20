const express=require("express")
const router=express.Router();
const {
   getAllAppele,
   createAppele 
} = require("../controllers/appele")
router.get('/appeles', getAllAppele)
router.post('/appele', createAppele)
module.exports = router;