const { Product } = require("../db");
const Op = require('sequelize').Op;

const getProducts = async (req, res) => {
  const { name } = req.query;
  try {
    const products = await Product.findAll({
      where: {
        name: name ? { name: { [Op.iLike]: `%${name}%` } } : null
      }
    });
    res.send(products);
  } catch (err) {
    console.log(err)
    res.status(404).send("Product not found")
  }
};


const getById = async (req, res) => {
  const { idProduct } = req.params
  try {
    const product = await Product.findByPk(idProduct)
    res.send(product);
  } catch (err) {
    console.log(err)
    res.status(404).send("Product not found")
  }
}



module.exports = {
  getProducts,
  getById
};

