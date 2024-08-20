const express=require("express")
const router=express.Router();
const{
saveAppel,
getAllAppels,
getAppelById
}=require("../controllers/appel")
router.get("/appels", getAllAppels)
router.post("/appel", saveAppel)
router.get("/appel/:id", getAppelById)
module.exports= router