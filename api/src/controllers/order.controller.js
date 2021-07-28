const { Order, User, Product, Model } = require("../db");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: User
        },
        {
          model: Model
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
          model: Model
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

const setOrderDetail = async(req, res) => {
  try {
    const { cart, orderId } = req.body;
    const order = await Order.findByPk(orderId);
    const idModels = cart.map( item => ({ id: item.id, quantity: item.quantity, price: item.price}));
    for(let i = 0; i < idModels.length; i++) {
      const model = await Model.findByPk(idModels[i].id);
      order.addModel(model, { through: { price: idModels[i].price, quantity: idModels[i].quantity }})
    }
    await Order.update({
      date: new Date().toLocaleString()
    },{
      where: { id: orderId }
    })
    res.status(200).json([{message: "orderlines was filled correctly"}])
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllOrders,
  getOrder,
  updateOrder,
  setOrderDetail
}
