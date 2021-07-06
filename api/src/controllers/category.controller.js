const { Category } = require("../db");

const addCategory = async (req,res,next) => {
    try {
        const { name, description } = req.body
        if(name){
            const find = await Category.findOne({ where: {name} })
            if (find){
                return res.status(500).json({ error: 'this category alredy exists' })
            } else {
                const category = await Category.create(req.body)
                return res.status(200).json({ success: `'${category.name}' category added `, category })
            }
        } else { return res.status(500).json({ error: 'category data is missing' }) }
    } catch (error){ next(error) }
}

module.exports = {
    addCategory
}