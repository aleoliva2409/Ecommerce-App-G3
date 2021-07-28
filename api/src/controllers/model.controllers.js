const { Model, Product, Category } = require("../db");
const { Op } = require("sequelize");

const addModelAndProduct = async (req, res) => {
  try {
    const { name, image, brand, description, color, size, sizeMattress, price, stock, categories } = req.body;

    const model = await Model.findOne({
      where: {
        name,
        image,
        brand,
      }
    })

    if(model) {
      return res.status(200).json({ message: "Ya existe este producto"})
    } else {

      const newModel = await Model.create({
        name,
        image,
        brand,
        description,
      })

      const newProduct = await Product.create({
        name,
        image: [image],
        color,
        size,
        sizeMattress,
        price,
        stock
      })

      newModel.setCategory(categories[0])
      newProduct.setModel(newModel)
      newProduct.addCategories(categories)
      return res.status(201).json({ message: "Creado correctamente"})
    }

  } catch (error) {
    console.log(error);
  }
}

const addProductOnly = async(req, res) => {
  try {
    const { idModel } = req.params;
    const { name, image, color, size, sizeMattress, price, stock, categories } = req.body;

    const model = await Model.findByPk(idModel)

    const newProduct = await Product.create({
      name,
      image: [image],
      color,
      size,
      sizeMattress,
      price,
      stock
    })
    //TODO: en caso de quitar relacion categories <-> products , modificar para que solo se use Models y borrar la otra relacion
    newProduct.setModel(model)
    newProduct.addCategories(categories)

    res.status(200).json({ message: "Producto creado"})
  } catch (error) {
    console.log(error);
  }
}

const getAllModels = async (req, res) => {
  try {
    const models = await Model.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"]
        }
      ],
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
      include: [
        {
          model: Category
        }
      ],
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
  const { idModel } = req.params;
  try {
    const model = await Model.findByPk(idModel,{
      include: [
        {
          model: Category,
          attributes: ["name"]
        },
        {
          model: Product,
          // where: { id: 66 }
        }
      ],
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
          // include: [
          //   {
          //     model: Product
          //   }
          // ]
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
  getModelsByCategory,
  addModelAndProduct,
  addProductOnly,
}
