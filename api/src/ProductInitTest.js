const { Category, Product } = require('./db.js');
const axios = require('axios');

async function setProducts(){
  let products = [
    {
      name: 'Colchón y Sommier Maxiking Siesta 80x190',
      color: 'white',
      size: '80x190',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Mediano.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Grande.jpg'],
      stock: 20,
      price: 33500,
    },
    {
      name: 'Colchón y Sommier Maxiking Siesta 100x190',
      color: 'white',
      size: '100x190',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Mediano.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Grande.jpg'],
      stock: 20,
      price: 0,
    },
    {
      name: 'Colchón y Sommier Maxiking Siesta 140x190',
      color: 'white',
      size: '140x190',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Mediano.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Grande.jpg'],
      stock: 20,
      price: 0,
    },
  ]

  let newPoduct = await Product.bulkCreate(products);
}

module.exports = async () => { await setProducts()};
