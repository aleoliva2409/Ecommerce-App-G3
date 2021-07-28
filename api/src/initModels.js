const { Product, Category, Model } = require('./db.js');
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



const initModels = async () => {
  try {

    for(let category of categories) {
      await Category.findOrCreate({
        where: { name: category.name },
        defaults: category
      })
    }

    const newCategories = await Category.findAll()

    fs.readFile('dbModels.json', async (err, data) => {
      const models = JSON.parse(data)
      try {
        const modelsDB = await Model.findAll()
        if(modelsDB[0] === undefined) {
          for(let model of models) {
            const newModel = await Model.create(model)
            if (newModel.name.includes('Sommier')) {
              await newModel.setCategory(newCategories[2])
            } else if (newModel.name.includes('Almohada')) {
              await newModel.setCategory(newCategories[1])
            } else if (newModel.name.includes('Colchón')) {
              await newModel.setCategory(newCategories[0])
            }
          }
          console.log("Models loaded");
        }
      } catch (error) {
        console.log(error);
      }
    })
  } catch (error) {
    console.log(error);
  }
}

module.exports = initModels
