const { User } = require("../db");
const Op = require("sequelize").Op;

const getAllUsers = async (req, res, next) => {
  try {
    const dbUsers = await User.findAll();
    res.status(200).json(dbUsers);
  } catch (error) {
    next(error);
  }
};


const addUser = async (req, res, next) => {
  const { name, color, size, description, image, price, stock, categories } =
    req.body;
    //categories es un array que contienne solo los id de las categorias!
  try {
    const find = await User.findOne({
      where: { name, color, size },
    });

    if (find) {
      return res.status(500).json({ error: "this product alredy exists" });
    }
    const newProduct = await User.create({
      name,
      description,
      image,
      price,
      stock,
      color,
      size,
    });

    newProduct.addCategories(categories);

    res.status(200).json({ message: "Product added!" });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const update = await User.findByPk(id);
    if (update) {
      User.update(req.body, {
        where: { id },
      });
      res.status(200).json({ message: "User update" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const remove = await User.findByPk(id);
    if (remove) {
      User.destroy({
        where: { id },
      });
      res.status(200).json({ message: "User delete" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

//TODO: S45
const getOrdersByUser = async (req, res) => {
  // codigo:
}


module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getOrdersByUser
};
