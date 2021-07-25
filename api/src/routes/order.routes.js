const { Router } = require("express");
const { getAllOrders, getOrder, updateOrder, setOrderDetail } = require("../controllers/order.controller.js");

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.post('/', setOrderDetail);

module.exports = router;
