const { Product, Category, Model } = require('./db.js');

const fs = require('fs');


const initDB = async () => {
  try {

    const newCategories = await Category.findAll()
    const productsDB = await Product.findAll()

    fs.readFile('db.json', async (err, data) => {
      const products = JSON.parse(data)
      try {
        if(productsDB[0] === undefined) {
          const modelsDB = await Model.findAll()
          // console.log(modelsDB);
          for(let product of products) {
            const newProduct = await Product.create(product)
            for(let model of modelsDB) {
              if(newProduct.name === model.name) {
                newProduct.setModel(model)
                // console.log("entre");
              }
              // console.log("no entre");
            }
            if (newProduct.name.includes('Colchón')) await newProduct.addCategory(newCategories[0])
            if (newProduct.name.includes('Almohada')) await newProduct.addCategory(newCategories[1])
            if (newProduct.name.includes('Sommier')) await newProduct.addCategory(newCategories[2])
          };
          console.log("products loaded");
        }
      } catch (error) {
        console.log(error)
      }
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = initDB;
