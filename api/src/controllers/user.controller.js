const { User, Order } = require("../db");
// const Op = require("sequelize").Op;

const getAllUsers = async (req, res, next) => {
  try {
    const dbUsers = await User.findAll();
    res.status(200).json(dbUsers);
  } catch (error) {
    next(error);
  }
};


const addUser = async (req, res, next) => {
  const {email,password,isadmin} = req.body;
  try {
    const find = await User.findOne({
      where: { email },
    });
    if (find) {
      return res.status(409).json({ error: "This User already exists" });
    }
    const newUser = await User.create({
      email,
      password,
      isadmin
    });

    res.status(200).json({ message: "User added!" });
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

const getOrdersByUser = async (req, res) => {
  // codigo:
  try {
    const { id } = req.params;
    const ordersByUser = await User.findByPk(id, {
      include: [
        {
          model: Order,
        }
      ]
    });
    res.status(200).json(ordersByUser);

  } catch (error) {
    console.log(error);
    res.status(404)
  }
}


module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getOrdersByUser
};
