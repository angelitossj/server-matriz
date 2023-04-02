const router = require("express").Router();



const {sumar,restar,multiplicar}=require("../controllers/controladorOperaciones")


router.post("/sumar",sumar)
router.post("/restar",restar)
router.post("/multiplicar",multiplicar)




module.exports= router