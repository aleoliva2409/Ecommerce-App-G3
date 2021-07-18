const { Order, Product } = require("./db");

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
    ],
  },
  {
    orderState:"cart",
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
    ],
  },
]

const ordersInitTest = async () => {
  for(let i=0; i < orders; i++){
    let temp1 = Math.trunc(Math.random()*(240-1)+1);
    let temp2 = Math.trunc(Math.random()*(240-1)+1);
    let temp3 = Math.trunc(Math.random()*(240-1)+1);
    let products = await Product.findAll({
      where: {
        id: {
            [Op.or]: [temp1, temp2, temp3],
        }
    }
  })
  orders[i].cart = products;
  }
  await Order.bulkCreate(orders);
}

module.exports = {ordersInitTest};


