const { Router } = require("express");
const { getAllModels } = require("../controllers/model.controllers")

const router = Router();

router.get('/', getAllModels);

module.exports = router;
