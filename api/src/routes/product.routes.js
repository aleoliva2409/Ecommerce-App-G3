const { Router } = require("express");
const { getProducts, getById } = require("../controllers/product.controller");

const router = Router();

router.get("/", getProducts);
router.get("/:idProduct", getById)

module.exports = router;
