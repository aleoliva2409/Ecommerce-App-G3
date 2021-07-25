const { Product, Category } = require('./db.js');
const ordersInitTest = require("./ordersInitTest")
const fs = require('fs');

const categories = [
  {
    name: 'Colchones',
    description: '',
    image: null
  },
  {
    name: 'Blanquería',
    description: '',
    image: null
  },
  {
    name: 'Sommiers',
    description: '',
    image: null
  },
  {
    name: 'Muebles',
    description: '',
    image: null
  }
];



const initDb = async () => {
  fs.readFile('db.json', async (err, data) => {
    const products = JSON.parse(data)
    try {
      // const newCategory = await Category.findOrCreate(categories)
      // const categories = await Category.findAll()
        for(let category of categories) {
          await Category.findOrCreate({
            where: { name: category.name},
            defaults: categories[category]
          })
        }

      const newCategories = await Category.findAll()
      const productsDB = await Product.findAll()

      if(productsDB[0] === undefined) {
        for(let product of products) {
          const newProduct = await Product.create(product)
          if (newProduct.name.includes('Colchón')) await newProduct.addCategory(newCategories[0])
          if (newProduct.name.includes('Almohada')) await newProduct.addCategory(newCategories[1])
          if (newProduct.name.includes('Sommier')) await newProduct.addCategory(newCategories[2])
        };
      }




    } catch (error) {
      console.log(error)
    }
    ordersInitTest();
  })
}

module.exports = initDb
