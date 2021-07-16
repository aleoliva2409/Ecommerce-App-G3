const { Router } = require("express");
const { addCart, getCartAll } = require("../controllers/cart.controller.js");
const { route } = require("./order.routes.js");

const router = Router();

router.get('/', getCartAll);
router.post('/add', addCart);


module.exports = router;