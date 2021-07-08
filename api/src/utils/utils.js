const {Category, product_category } = require("../db");


const productCategory = async (idProduct) => {
    let relation = await product_category.findAll({
      where: {
        productId: idProduct,
      },
    });
    const categoryArray = [];
    for (element of relation) {
  
      let category = await Category.findOne({
        where: {
          id: element.dataValues.categoryId,
        },
      });
  
      categoryArray.push(category.dataValues.name);
    }
    console.log(categoryArray);
    return categoryArray;
  };

  module.exports={
    productCategory
  }