const { Router } = require("express");
const { addCart, getCartAll , getCartAllByUser} = require("../controllers/cart.controller.js");

const router = Router();

router.get('/', getCartAll);
router.post('/add', addCart);
router.get('/user',getCartAllByUser);


module.exports = router;