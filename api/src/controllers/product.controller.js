const { Product, Category } = require("../db");
const Op = require('sequelize').Op;


//?may have to change this route
const getProductsAll = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    if (products.length) return res.send(products)
    else return res.status(404).json({ error: "Product not found" })
  } catch (err) {
    next(err)
  }
};

//! this route return the products with the "name" receibed, to review
const getProducts = async (req, res, next) => {

  const { name } = req.query;
  try {
    const products = await Product.findAll({
      where: {
        name: name ? { [Op.iLike]: `%${name}%` } : null
      }
    });
    if (products.length) return res.send(products)
    else return res.status(404).json({ error: "Product not found" })
  } catch (err) {
    next(err)
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await Product.findByPk(id)
    if (product) return res.send(product);
    else return res.status(404).json({ error: "Product not found" })
  } catch (err) {
    next(err)
  }
}


const addProduct = async (req, res, next) => {
  const { id, name, color, size, description, image, price, stock, category } = req.body
  try {
    const find = await Product.findByPk(id)
    if (find) {
      return res.status(500).json({ error: 'this product alredy exists' })
    }
    else {
      const findCategory = await Category.findOne({ where: { name: category } })
      if (!findCategory) return res.status(500).json({ error: 'enter category' })
      const product = await Product.create({ name, color, size, description, image, price, stock })
      await findCategory.addProduct(product)
      return res.status(200).json(product)
    }
  } catch (err) {
    next(err)
  }
}


const updateProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const update = await Product.findByPk(id);
    if (update) {
      Product.update(req.body, {
        where: { id },
      })
      res.status(200).json({ message: "Product update" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    next(err)
  }
}


const deleteProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    const remove = await Product.findByPk(id);
    if (remove) {
      Product.destroy({
        where: { id },
      })
      res.status(200).json({ message: "Product delete" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    next(err)
  }
}


module.exports = {
  getProducts,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsAll
};

