const { Router } = require("express");
const { getAllOrders, getOrder, updateOrder, addOrder } = require("../controllers/order.controller.js");

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.post('/', addOrder);

module.exports = router;
