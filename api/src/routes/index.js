const { Router } = require("express");

// ? Import all routes
// ? const productRouter = require("./product.routes")

const pruebaRouter = require("./prueba.routes");



const router = Router();

// ? config routers
// ? router.use("/products" , productRouter)

router.use("/prueba", pruebaRouter);


module.exports = router;
