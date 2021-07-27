const { Model, Category, User, Reviews } = require("../db");

const getAllModels = async (req, res) => {
  try {
    const models = await Model.findAll({
      include: [{
        model: Category,
        attributes: ["name"]
      }],
    });
    res.status(200).json(models);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllModels
}
