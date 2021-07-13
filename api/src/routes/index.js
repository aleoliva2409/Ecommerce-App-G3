const { Router } = require("express");

// ? Import all routes
// ? const productRouter = require("./product.routes")

const productRouter = require("./product.routes");
const categoryRouter = require('./category.routes');
const orderRouter = require('./order.routes');

const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/order", orderRouter);

module.exports = router;
