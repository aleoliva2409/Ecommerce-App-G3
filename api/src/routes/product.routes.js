const { Router } = require("express");
const {
  getProducts,
  getProductsAll,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  addReview,
  updateReview,
  getReview,
  deleteReview
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
router.post("/:idProduct/reviews", addReview);
router.get("/:idProduct/reviews", getReview);
router.put("/:idProduct/reviews/:idReview", updateReview);
router.delete("/:idProduct/reviews/:idReview", deleteReview);

module.exports = router;
