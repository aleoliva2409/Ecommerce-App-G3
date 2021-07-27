const { Router } = require("express");
const { getAllModels, getModelSearch, getModelById, getModelsByCategory } = require("../controllers/model.controllers")

const router = Router();

router.get('/all', getAllModels);
router.get('/', getModelSearch);
router.get('/:id', getModelById);
router.get('/category/:id', getModelsByCategory)

module.exports = router;
