const { Product, Category, User, Reviews } = require("../db");
const Op = require("sequelize").Op;

const getProductsAll = async (req, res, next) => {
  try {
    const dbProducts = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.status(200).json(dbProducts);
  } catch (error) {
    next(error);
  }
};

//! this route return the products with the "name" receibed, to review
const getProducts = async (req, res, next) => {
  const { name } = req.query;
  try {
    const products = await Product.findAll({
      where: {
        name: name ? { [Op.iLike]: `%${name}%` } : null,
      },
    });
    if (products.length) return res.send(products);
    else return res.status(404).json({ error: "Product not found" });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id,{
      include:[
      {
        model: Category
      }
    ]
    });
    if (product) return res.send(product);
    else return res.status(404).json({ error: "Product not found" });
  } catch (err) {
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  const { name, color, size, description, image, price, stock, categories } =
    req.body;
    //categories es un array que contienne solo los id de las categorias!
  try {
    const find = await Product.findOne({
      where: { name, color, size },
    });

    if (find) {
      return res.status(409).json({ error: "this product alredy exists" });
    }
    const newProduct = await Product.create({
      name,
      description,
      image,
      price,
      stock,
      color,
      size,
    });

    newProduct.addCategories(categories);

    res.status(201).json({ message: "Product added!" });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const update = await Product.findByPk(id);
    if (update) {
      Product.update(req.body, {
        where: { id },
      });
      update.setCategories(req.body.categories);
      res.status(200).json({ message: "Product update" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const remove = await Product.findByPk(id);
    if (remove) {
      await Product.destroy({
        where: { id },
      });
      res.status(200).json({ message: "Product delete" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    next(err);
  }
};

const getProductsByCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await Category.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Product,
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.send(category);
  } catch (err) {
    next(err);
  }
};

//* Task 54
const addReview = async (req, res, next) => {
  try {
    const { idProduct } = req.params;
    const { idUser,text } = req.body;

    const user = await User.findByPk(idUser, {
      include: [
        {
          model: Product
        }
      ]
    });
    const product = await Product.findByPk(idProduct);

    if(user.products[0] === undefined) {
      product.addUser(user, { through: { text }});
      res.status(201).json({message: "Review creada" });
    } else {
      for(let productUser of user.products) {
        if(productUser.reviews.userId === parseInt(idUser) && productUser.reviews.productId === parseInt(idProduct)) {
          return res.status(409).json({message: "Ya realizo una review en este producto"})
        }
      }

      product.addUser(user, { through: { text }});
      return res.status(201).json({message: "Review creada"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}]);
  }
}

//* Task 55
const updateReview = async (req, res) => {
  try {
    const { idProduct, idReview } = req.params;
    const { text } = req.body;

    const review = await Reviews.findByPk(idReview)
    if(review) {
      if(review.productId === parseInt(idProduct)) {
        await Reviews.update({ text },{
          where: { id: idReview }
        })
        return res.status(200).json([{ message: 'Review actualizada'}])
      }
      return res.status(404).json([{ message: 'La review no corresponde con el producto'}])
    } else {
      res.status(404).json({ message: 'Review no existe'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}]);
  }
}

//* Task 56
const deleteReview = async(req, res) => {
  try {
    const { idProduct, idReview } = req.params;
    const review = await Reviews.findByPk(idReview)
    if(review) {
      if(review.productId === parseInt(idProduct)) {
        await Reviews.destroy({
          where: { id: idReview }
        })
        return res.status(200).json({ message: "Review eliminada"})
      }

      return res.status(404).json({ message: "La review no coincide con el producto"})

    } else {
      res.status(404).json({ message: "Review no encontrada" })
    }

    res.json(review)
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}]);
  }

}

//* Task 57
const getReview = async (req, res) => {
  try {
    const { idProduct } = req.params;
    const reviews = await Reviews.findAll({
      where: {
        productId: idProduct,
      }
    })
    if(reviews[0] !== undefined) {
      return res.status(200).json(reviews)
    } else {
      return res.status(404).json({message: "No hay reviews en este producto"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json([{Error: "something was wrong"}])
  }
}

module.exports = {
  getProducts,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsAll,
  getProductsByCategory,
  addReview,
  updateReview,
  getReview,
  deleteReview
};
