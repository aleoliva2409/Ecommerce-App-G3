const { Category } = require("../db");

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Category.findOne({
      where: {
        id,
      },
    });
    if (remove) {
      Category.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ success: "Category delete" });
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const edit = await Category.findOne({
      where: {
        id,
      },
    });
    if (edit) {
      const category = await edit.update(req.body);
      return res.status(201).json({ success: "updated category" });
    } else {
      res.status(404).json({ error: "Category not found" });
    }
  } catch (error) {
    next(error);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (name) {
      const find = await Category.findOne({ where: { name } });
      if (find) {
        return res.json({ error: "this category alredy exists" }).status(403);
      } else {
        const category = await Category.create(req.body);
        return res
          .status(200)
          .json({ success: `${category.name} category added ` });
      }
    } else {
      return res.json({ error: "category data is missing" }).status(500);
    }
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (categories) {
      res.status(200).json(categories);
    } else {
      res.json({ error: "no hay categorias" }).status(404);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
};
