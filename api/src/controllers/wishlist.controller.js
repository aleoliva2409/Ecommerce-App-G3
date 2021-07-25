const { Order, User, Product , Wishlist} = require("../db");

const addWishlist = async (req, res, next) => {
  try {
    //me llega un mail y un id_producto
    const { email, products } = req.body;
    const newWishlist = { products };

    if (email === "") {
      res.status(400).json({ error: "No se puede agregar a su lista de deseos. Inicie sesion" });
    }
    else {
      const user = await User.findOne({
        where: { email }
      })

      if (user) {
        //busco si esta en wishlist

        const info = await Wishlist.findOne({ where: { userId: user.dataValues.id } });
        if (info) {

          info.update({ products }, { where: { userId: user } })
            .then((response) => {
              res.send('Wishlist actualizada');
            })
            .catch((e) => next(e));
        } else {
          const wishlist = await Wishlist.create(newWishlist);
          wishlist.setUser(user);
          res.status(200).json({ message: "Producto añadido a favoritos!" });
        }

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

    const user = await User.findOne({
      where: { email }
    });

    if(user)
    {
      //si existe el usuario, me fijo que este en wishlist
      const dbWishlist = await Wishlist.findOne(
        {
            where:{
              userId: user.dataValues.id
            }
        });

        res.status(200).json(dbWishlist);
    }
    else
    {
      res.status(404).json({ message: "No se encontró el usuario" });
    }


  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addWishlist,
  getWishilistByUser
}
