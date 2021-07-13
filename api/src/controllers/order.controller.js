const { Product, Order } = require("../db");


const addOrder = async (req, res) => {
  try {
    const { orderState, shippingState, products, firstname,lastname } = req.body;

    const newOrder = await Order.create({
      orderState,
      shippingState,
      firstname,
      lastname,
    })

    newOrder.addProduct(1)
    res.status(200).json([{msg: 'Order added successfully'}])
  } catch (error) {
    console.log(error);
  }
}

const getAllOrders = async (req, res) => {
  try {
    // ? users ?
    const orders = await Order.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "name"]
        }
      ]
    });

    res.status(200).json(orders)
  } catch (error) {
    console.log(error);
    res.status(404).json([{msg: "Error"}])
  }
}

const getOrder = async (req, res) => {
  try {
    // ? users ?
    const { id } = req.params;
    const order = await Order.findByPk(id)
    res.status(200).json(order)
  } catch (error) {

  }
}

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Order.findByPk(id)
    if(update){
      await Order.update(req.body, {
        where: { id },
      })
      // update.setUser(req.body.user)
      res.status(200).json([{msg: "Order updated successfully."}])
    } else {
      res.status(404).json([{msg: "Order not found."}])
    }
  } catch (error) {
    console.log(error);
    res.status(502)
  }
}

module.exports = {
  getAllOrders,
  getOrder,
  updateOrder,
  addOrder,
}
