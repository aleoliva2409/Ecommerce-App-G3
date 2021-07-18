const { Order, Product } = require("./db");
const {Op} = require("sequelize");

const orders = [
  {
    orderState:"processing",
    shippingState:"initial",
    shippingCost:600.99,
    shippingAddres:"juan b justo 400",
    shippingZip:"1508",
    shippingCity:"buenos Aires",
    comments:"marcarme al celular",
    paymentDetails:"debit",
    firstName:"camila",
    lastName:"bonilla",
    cart:[
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        cant: 2,
        price: 35800.00
      }
    ],
  },
  {
    orderState:"cancelled",
    shippingState:"created",
    shippingCost:600.99,
    shippingAddres:"condarco 800",
    shippingZip:"1508",
    shippingCity:"buenos Aires",
    comments:"dejar en porteria",
    paymentDetails:"credit",
    firstName:"felipe",
    lastName:"alvarez",
    cart:[
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        cant: 2,
        price: 35800.00
      },
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        cant: 1,
        price: 158100.00
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        cant: 1,
        price: 86000.00
      }
    ],
  },
  {
    orderState:"pending",
    shippingState:"processing",
    shippingCost:600.99,
    shippingAddres:"juan b alberdi 200",
    shippingZip:"1508",
    shippingCity:"buenos Aires",
    comments:"golpear fuerte la puerta",
    paymentDetails:"debit",
    firstName:"camilo",
    lastName:"moralez",
    cart:[
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        cant: 2,
        price: 35800.00
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        cant: 1,
        price: 86000.00
      }
    ],
  },
  {
    orderState:"completed",
    shippingState:"cancelled",
    shippingCost:600.99,
    shippingAddres:"curapaligue 1000",
    shippingZip:"1508",
    shippingCity:"buenos Aires",
    comments:"dejar en la puerta lateral",
    paymentDetails:"credit",
    firstName:"jaime",
    lastName:"angulo",
    cart:[
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        cant: 1,
        price: 158100.00
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        cant: 1,
        price: 86000.00
      }
    ],
  },
  {
    orderState:"completed",
    shippingState:"completed",
    shippingCost:600.99,
    shippingAddres:"coronel diaz 1000",
    shippingZip:"1508",
    shippingCity:"buenos Aires",
    comments:"llamar a 1159087639",
    paymentDetails:"mercado pago",
    firstName:"mariana",
    lastName:"corredor",
    cart:[
      {
        id: 1,
        name: "Colchón y Sommier Suavegom Merit 80x190",
        cant: 2,
        price: 35800.00
      },
      {
        id: 2,
        name: "Colchón y Sommier King Koil Brighton 200x200",
        cant: 1,
        price: 158100.00
      },
      {
        id: 3,
        name: "Colchón y Sommier Elegante Señorial 180x200",
        cant: 1,
        price: 86000.00
      }
    ],
  },
]

const ordersInitTest = async () => {
  try{
    await Order.bulkCreate(orders);
  } catch (e) {console.log(e)}
}

module.exports = {ordersInitTest};


