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
      Product.destroy({
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

//TODO: Task 54
// const addReview = async (req, res, next) => {
//   try {
//     const { idProduct } = req.params;
//     const { idUser,text } = req.body;

//     const user = await User.findByPk(idUser, {
//       include: [
//         {
//           model: Reviews
//         }
//       ]
//     });

//     // if(user.reviews[0] === undefined) {
//     //   const newReview = await Reviews.create({
//     //     text,
//     //     productId: idProduct,
//     //     userId: idUser
//     //   })

//     //   newReview.addProduct(idProduct);

//     // }



//     res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json([{Error: "something was wrong"}]);
//   }
// }

// //TODO: Task 55
// const updateReview = async (req, res, next) => {
//   const { idProduct, idReview } = req.params;

//   // const product = await Product.findByPk(idProduct);
//   // if(product) {

//   // }
// }

module.exports = {
  getProducts,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsAll,
  getProductsByCategory,
  // addReview,
  // updateReview,
};
