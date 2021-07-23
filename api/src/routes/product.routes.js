const { Router } = require("express");
const {
  getProducts,
  getProductsAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  // addReview,
  // updateReview,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", getProducts); //! commented to review
router.get("/category/:id", getProductsByCategory);
router.get("/all", getProductsAll);
router.get("/:id", getById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

//TODO: Task 54,55
// router.post("/:idProduct/review", addReview);
// router.put("/:idProduct/review/:idReview", updateReview);

module.exports = router;
