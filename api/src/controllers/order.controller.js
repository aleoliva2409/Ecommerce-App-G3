const { Order, User, Product } = require("../db");

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

const getOrdersByUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await User.findByPk(idUser, {
      include: [
        {
          model: Order,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    });

    if(user) {
      return res.status(200).json(user)
    } else {
      return res.status(404).json({ message: "No existe el usuario" })
    }

  } catch (error) {
    console.log(error)
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

const updateOrderByUser = async (req,res) => {
  console.log('---------------------------------------------------------------------------------')
  try{
    const{userId, orderState, cart} = req.body;
    console.log(orderState)
    const order = await Order.findOne({ where:{ userId:userId ,orderState:'cart' }})
    const idProducts = cart.map( item => ({ id: item.id, quantity: item.quantity}));
    for(let i = 0; i < idProducts.length; i++) {
      const product = await Product.findByPk(idProducts[i].id);
      order.addProduct(product, { through: { price: product.price, quantity: idProducts[i].quantity }})
    }
    order.update({orderState:orderState})
    order.update({date:new Date().toLocaleString()})
    res.json({message:'updated OrderState'})
  }catch (error){
    console.log(error)
  }
}

const setOrderDetail = async(req, res) => {
  try {
    const { cart, orderId } = req.body;
    const order = await Order.findByPk(orderId);
    const idProducts = cart.map( item => ({ id: item.id, quantity: item.quantity}));
    for(let i = 0; i < idProducts.length; i++) {
      const product = await Product.findByPk(idProducts[i].id);
      order.addProduct(product, { through: { price: product.price, quantity: idProducts[i].quantity }})
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
  setOrderDetail,
  getOrdersByUser,
  updateOrderByUser
}
