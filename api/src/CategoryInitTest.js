const { Category } = require('./db.js');
// const axios = require('axios');

async function setCategory(){
  let category = [
    {
      name: 'Sommier y Colchón',
      image: 'https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam-1.jpg',
      description:'trae sommeier y colchon',
      clicks: 5,
    },
    {
      name: 'Colchón',
      image: 'https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam-1.jpg',
      description:'trae colchones',
      clicks: 5,
    },
    {
      name: 'Muebles',
      image: 'https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam-1.jpg',
      description:'trae muebles',
      clicks: 5,
    },
    {
      name: 'Blanqueria',
      image: 'https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam-1.jpg',
      description:'trae blanqueria',
      clicks: 5,
    },

  ]

  let newcategory = await Category.bulkCreate(category);
  console.log(newcategory.length+" Category Created to Test");
}

module.exports = async () => { await setCategory()};
