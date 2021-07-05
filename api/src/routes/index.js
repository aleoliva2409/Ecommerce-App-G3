const { Router } = require("express");

// ? Import all routes
// ? const productRouter = require("./product.routes")

const productRouter = require("./product.routes");



const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/products", productRouter);


module.exports = router;
