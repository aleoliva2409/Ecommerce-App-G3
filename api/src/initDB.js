const { Product, Category } = require('./db.js');
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
]

const initDb = async () => {
  fs.readFile('db.json', async (err, data) => {
    const products = JSON.parse(data)
    try {
      const newCategory = await Category.bulkCreate(categories)
      for(product of products) {
        const newProduct = await Product.create(product)
        if (newProduct.name.includes('Colchón')) await newProduct.addCategory(newCategory[0])
        if (newProduct.name.includes('Almohada')) await newProduct.addCategory(newCategory[1])
        if (newProduct.name.includes('Sommier')) await newProduct.addCategory(newCategory[2])
      };
    } catch (error) {
      console.log(error)
    }
  })
}

module.exports = { initDb }
