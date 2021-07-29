const { User, Wishlist } = require("../db");

const addWishlist = async (req, res, next) => {
  try {
    //? Me llega un mail y un array con id_producto
    const { email, idProd } = req.body;
    const newWishlist = { products: [idProd] };
    if (email === "") {
      res.status(400).json({ error: "No se puede agregar a favoritos. Inicie sesion" });
    }
    else {
      const user = await User.findOne({
        where: { email }
      })
      if (user) {
        //? Busco si esta en wishlist
        const info = await Wishlist.findOne({ where: { userId: user.dataValues.id } });
        if (info) {
          const update = [...info.dataValues.products, idProd]
          info.update({ products: update }, { where: { userId: user } })
            .then((response) => {
              res.json({ message: 'Lista de favoritos actualizada' });
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

    if (user) {
      //si existe el usuario, me fijo que este en wishlist
      const dbWishlist = await Wishlist.findOne(
        {
          where: {
            userId: user.dataValues.id
          }
        });

      res.status(200).json(dbWishlist);
    }
    else {
      res.status(404).json({ message: "No se encontró el usuario" });
    }


  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlist = async (req, res, next) => {
  try {
    const { id, email } = req.body;
    const user = await User.findOne({
      where: { email }
    })
    const wishlist = await Wishlist.findOne({ where: { userId: user.dataValues.id } });
    const update = wishlist.dataValues.products.filter(item => item != id);
    wishlist.update({ products: update }, { where: { userId: user } })
      .then((response) => {
        res.json({ message: 'Lista de favoritos actualizada' });
      })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addWishlist,
  getWishilistByUser,
  removeFromWishlist
}
