const { Router } = require("express");
const passport = require('passport');

// ? Import all routes
// ? const productRouter = require("./product.routes")

const modelRouter = require("./model.routes")
const productRouter = require("./product.routes");
const categoryRouter = require('./category.routes');
const userRouter = require('./user.routes');
const orderRouter = require('./order.routes');
const reviewRouter = require('./review.routes');
const cartRouter = require('./cart.routes');
const checkout = require('./checkout.routes')
const protectedRouter = require('./protected.routes');
const authRouter = require('./auth.routes');
const wishlist = require('./wishlist.routes');
const authGoogle = require('./authGoogle.routes')
const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/models", modelRouter)
router.use("/products", reviewRouter)
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/users", userRouter);
router.use("/cart", cartRouter);
router.use("/orders", orderRouter);
router.use("/checkout", checkout);
router.use("/auth", authRouter);
router.use("/users", passport.authenticate('jwt', { session: false }), protectedRouter);
router.use("/authGoogle", authGoogle);
router.use("/wishlist", wishlist);

module.exports = router;
