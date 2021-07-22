const { Order, User, Product, Orderlines } = require("../db");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User
        },
        {
          model: Product
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
    const { id } = req.params;
    const order = await Order.findByPk(id,{
      include: [
        {
          model: User
        },
        {
          model: Product
        }
      ]
    })
    res.status(200).json(order)
  } catch (error) {
    console.log(error);
    res.status(502)
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
      res.status(200).json([{msg: "Order updated successfully."}])
    } else {
      res.status(404).json([{msg: "Order not found."}])
    }
  } catch (error) {
    console.log(error);
    res.status(502);
  }
}

const setOrderDetail = (req, res) => {

}

module.exports = {
  getAllOrders,
  getOrder,
  updateOrder,
  setOrderDetail
}
