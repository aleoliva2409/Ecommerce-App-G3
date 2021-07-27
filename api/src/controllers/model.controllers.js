const { Model, Category, User, Reviews } = require("../db");
const { Op } = require("sequelize");

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
    console.log(error);
  }
}

const getModelSearch = async (req, res) => {
  const { name } = req.query;
  try {
    const models = await Model.findAll({
      where: {
        name: name ? { [Op.iLike]: `%${name}%` } : null,
      },
    });
    if (models.length) {
      return res.status(200).json(models);
    } else {
      return res.status(404).json({ error: "No hay productos que coincidan" });
    }
  } catch (error) {
    console.log(error);
  }
}

const getModelById = async (req, res) => {
  const { id } = req.params;
  try {
    const model = await Model.findByPk(id,{
      include: [{
        model: Category,
        attributes: ["name"]
      }],
    });
    if (model) {
      return res.status(200).json(model);
    } else {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getModelsByCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id,{
      include: [
        {
          model: Model,
        }
      ]
    });

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllModels,
  getModelSearch,
  getModelById,
  getModelsByCategory
}
