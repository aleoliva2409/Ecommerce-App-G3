const { Router } = require("express");
const { getAllOrders, getOrder, updateOrder, getAllOrders2 } = require("../controllers/order.controller.js");

const router = Router();

router.get('/', getAllOrders);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.get('/2', getAllOrders2);

module.exports = router;
