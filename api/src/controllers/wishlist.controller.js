const { Order, User, Product } = require("../db");

const addWishlist = async (req, res, next) => {
  try {
    //me llega un mail y un id_producto
    const { email, id_product } = req.body;

    if (email === "") {
      res.status(400).json({ error: "No se puede agregar a su lista de deseos. Inicie sesion" });
    }
    else {
      const user = await User.findOne({
        where: { email }
      })

      if (user) {
        //hago la relacion
        user.addProduct(id_product);
        res.status(200).json({ message: "Producto añadido a favoritos!" });
      }
      else {
        res.status(404).json({ message: "No se encontró el usuario" });
      }
    }

  } catch (error) {
    next(error);
  }
};


const getWishilistByUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const dbWishlist = await Order.findAll(
      {
        include: [
          {
            model: User,
            where: {
              email
            }
            /*  through: {
               attributes: [],
             }, */
          },
        ],
      }
    );

    res.json(dbWishlist).status(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addWishlist,
  getWishilistByUser
}
