const { Category } = require("../db");

const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const remove = await Category.findOne({
            where: {
                id
            },
        });
        if (remove) {
            Category.destroy({
                where: {
                    id
                },
            })
            res.status(200).json({ message: "Category delete" });
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    }
    catch (error) {
        next(error)
    }
};



const updateCategory = async (req, res) => {
    try {
      const {id} = req.body;
        const edit = await Category.findOne({
          where: {
            id,
          },
        });
        if (edit) {
          const category = await edit.update(req.body);
          return res.status(201).json({message: "updated category"});
        } else {
            res.status(404).json({ message: "Category not found" });
        }
    } catch (error) {
      next(error);
    }
  };



const addCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body
        if (name) {
            const find = await Category.findOne({ where: { name } })
            if (find) {
                return res.status(500).json({ error: 'this category alredy exists' })
            } else {
                const category = await Category.create(req.body)
                return res.status(200).json({ success: `'${category.name}' category added `, category })
            }
        } else { return res.status(500).json({ error: 'category data is missing' }) }
    } catch (error) { next(error) }
}

module.exports = {
    addCategory,
    deleteCategory,
    updateCategory
}
