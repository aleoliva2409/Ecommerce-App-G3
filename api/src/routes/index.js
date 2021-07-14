const { Router } = require("express");

// ? Import all routes
// ? const productRouter = require("./product.routes")

const productRouter = require("./product.routes");
const categoryRouter = require('./category.routes');
const userRouter = require('./user.routes');
const orderRouter = require('./order.routes');
const cartRouter = require('./cart.routes');

const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/users", userRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter);

module.exports = router;
