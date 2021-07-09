const { Router } = require("express");
const {
  getProducts,
  getProductsAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", getProducts); //! commented to review
router.get("/category/:id", getProductsByCategory);
router.get("/all", getProductsAll);
router.get("/:id", getById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
