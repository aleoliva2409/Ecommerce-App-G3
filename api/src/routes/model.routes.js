const { Router } = require("express");
const { getAllModels, getModelSearch } = require("../controllers/model.controllers")

const router = Router();

router.get('/all', getAllModels);
router.get('/', getModelSearch)

module.exports = router;
