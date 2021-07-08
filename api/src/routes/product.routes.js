const { Router } = require("express");
const { getProducts, getById, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");


const router = Router();

router.get("/", getProducts);
router.get("/:id", getById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
