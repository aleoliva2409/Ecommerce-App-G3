const { Router } = require("express");
const {
  getAllModels,
  getModelSearch,
  getModelById,
  getModelsByCategory,
  addModelAndProduct,
  addProductOnly,
  getModelAndProduct,
} = require("../controllers/model.controllers");

const router = Router();

router.get("/all", getAllModels);
router.get("/", getModelSearch);
router.get("/:idModel", getModelById);
router.get("/:idModel/product/:idProduct", getModelAndProduct);
router.get("/category/:id", getModelsByCategory);
router.post("/", addModelAndProduct);
router.post("/:idModel", addProductOnly);

module.exports = router;
