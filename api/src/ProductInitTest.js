const { Category, Product } = require('./db.js');
const axios = require('axios');

async function setProducts(){
  let product = {
    name: 'Colchón y Sommier Piero Foam',
    color: 'white',
    size: '80x190',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
    image: ['https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Mediano.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Foam-Grande.jpg'],
    stock: 20,
    price: 33500,
  }

  let newPoduct = await Product.create(product);
  console.log(newPoduct.toJSON());
}

module.exports = async () => { await setProducts()};
