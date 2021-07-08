const { Router } = require("express");
const { getProducts, getProductsAll, getById, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");


const router = Router();

router.get("/", getProducts);//! commented to review
router.get("/all", getProductsAll);
router.get("/:id", getById)
router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;
