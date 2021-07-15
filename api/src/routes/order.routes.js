const { Router } = require("express");
const { getAllOrders, getOrder, updateOrder } = require("../controllers/order.controller.js");

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);

module.exports = router;
