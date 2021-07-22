const { Order, Product, Orderlines } = require("./db");
const { Op } = require('sequelize');

var orders = [
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
  },
]

const ordersInitTest = async () => {
  let temp1, temp2, temp3;
  let products = [];
  let orderlines = [];
  try{
    for(let i = 0; i < orders.length; i++){
      temp1 = Math.trunc(Math.random()*(300-1)+1);
      temp2 = Math.trunc(Math.random()*(300-1)+1);
      temp3 = Math.trunc(Math.random()*(300-1)+1);
      products = await Product.findAll({
          where: {
              id: {
                  [Op.or]: [temp1, temp2, temp3],
              }
          }
      });
      for(let j = 0; j < products.length; j++){
        let orderline = {
          orderId: i+1,
          productId: products[j].id,
          price: Number(products[j].price)
        }
        orderlines.push(orderline);
      }
      orders[i].cart = products;
    }
    orders = await Order.bulkCreate(orders);
    orderlines = await Orderlines.bulkCreate(orderlines);
    console.log("test orders created");
  } catch (e) {console.log(e)}


}

module.exports = ordersInitTest;
