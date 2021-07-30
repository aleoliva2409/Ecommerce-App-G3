const { Router } = require("express");
const { getAllOrders, getOrder, updateOrder, updateOrderByUser, setOrderDetail, getOrdersByUser } = require("../controllers/order.controller.js");

const router = Router();

router.get('/', getAllOrders);
router.put('/status', updateOrderByUser)
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.post('/', setOrderDetail);
router.get('/user/:idUser', getOrdersByUser);

module.exports = router;
