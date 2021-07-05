const { Router } = require("express");
const { prueba, postPrueba } = require("../controllers/prueba.controller");

const router = Router();

router.get("/", prueba);
router.post("/", postPrueba);

module.exports = router;
