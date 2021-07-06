const { Category } = require("../db");


const deleteCategory = async (req, res) => {
  const { id } = req.body;
  try {
        const remove = await Category.findOne({
            where: {
                id
            },
        });
     if(remove)
     {
        Category.destroy({
            where:{
                id
            },
         })
         res.status(200).json({message:"Category delete"});
  } else{
    res.status(404).send({message:"Category not found"});
  }
}
  catch (err) {
    res.status(404)
  }
};


module.exports = {
    deleteCategory,
  };