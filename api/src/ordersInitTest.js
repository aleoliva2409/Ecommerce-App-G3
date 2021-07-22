const { Order, Orderlines, Product } = require("./db");

const orders = [
  {
    orderState: "processing",
    shippingState: "initial",
    shippingCost: 600.99,
    shippingAddres: "juan b justo 400",
    shippingZip: "1508",
    shippingCity: "buenos Aires",
    comments: "marcarme al celular",
    paymentDetails: "debit",
    firstName: "camila",
    lastName: "bonilla",
    cart: [
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        quantity: 2,
        price: 35800.0,
      },
    ],
    userId: 2,
  },
  {
    orderState: "cancelled",
    shippingState: "created",
    shippingCost: 600.99,
    shippingAddres: "condarco 800",
    shippingZip: "1508",
    shippingCity: "buenos Aires",
    comments: "dejar en porteria",
    paymentDetails: "credit",
    firstName: "felipe",
    lastName: "alvarez",
    cart: [
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        quantity: 2,
        price: 35800.0,
      },
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        quantity: 1,
        price: 158100.0,
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        quantity: 1,
        price: 86000.0,
      },
    ],
    userId: 1,
  },
  {
    orderState: "pending",
    shippingState: "processing",
    shippingCost: 600.99,
    shippingAddres: "juan b alberdi 200",
    shippingZip: "1508",
    shippingCity: "buenos Aires",
    comments: "golpear fuerte la puerta",
    paymentDetails: "debit",
    firstName: "camilo",
    lastName: "moralez",
    cart: [
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        quantity: 2,
        price: 35800.0,
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        quantity: 1,
        price: 86000.0,
      },
    ],
    userId: 3,
  },
  {
    orderState: "completed",
    shippingState: "cancelled",
    shippingCost: 600.99,
    shippingAddres: "curapaligue 1000",
    shippingZip: "1508",
    shippingCity: "buenos Aires",
    comments: "dejar en la puerta lateral",
    paymentDetails: "credit",
    firstName: "jaime",
    lastName: "angulo",
    cart: [
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        quantity: 1,
        price: 158100.0,
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        quantity: 1,
        price: 86000.0,
      },
    ],
    userId: 4,
  },
  {
    orderState: "completed",
    shippingState: "completed",
    shippingCost: 600.99,
    shippingAddres: "coronel diaz 1000",
    shippingZip: "1508",
    shippingCity: "buenos Aires",
    comments: "llamar a 1159087639",
    paymentDetails: "mercado pago",
    firstName: "mariana",
    lastName: "corredor",
    cart: [
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        quantity: 2,
        price: 35800.0,
      },
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        quantity: 1,
        price: 158100.0,
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        quantity: 1,
        price: 86000.0,
      },
    ],
    userId: 1,
  },
];

const ordersInitTest = async () => {
  try {
    await Order.bulkCreate(orders);
    // await Order.create({
    //   orderState: "processing",
    //   shippingState: "initial",
    //   shippingCost: 600.99,
    //   shippingAddres: "juan b justo 400",
    //   shippingZip: "1508",
    //   shippingCity: "buenos Aires",
    //   comments: "marcarme al celular",
    //   paymentDetails: "debit",
    //   firstName: "camila",
    //   lastName: "bonilla",
    //   cart: [
    //     {
    //       id: 1,
    //       name: "Colchón y Sommier Suavegom Merit 80x190",
    //       quantity: 2,
    //       price: 35800.0,
    //     },
    //   ],
    //   userId: 2,
    // })

    // const order = await Order.findByPk(1)
    // const product = await Product.findByPk(5)
    // // await Orderlines.create({
    // //   price: 35800.00,
    // //   quantity: 6,
    // //   orderId: 1,
    // //   productId: 50
    // // })
    // order.addProduct(product,{ through: { price: 3500, quantity: 3}})
  } catch (e) {
    console.log(e);
  }
};

module.exports = ordersInitTest;
