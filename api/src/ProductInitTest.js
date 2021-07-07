const { Category, Product } = require('./db.js');
const axios = require('axios');

async function setProducts(){
  let product = {
    name: 'colchon',
    color: 'white',
    size: '97x80,plaza y media,',
    description: 'un colchon demasiado suave',
    image: ['https://www.pillowtop.com.ar/wp-content/uploads/som.jpg'],
    stock: 20,
    price: 10.25,
  }

  let newPoduct = await Product.create(product);
  console.log(newPoduct.toJSON());
}

module.exports = async () => { await setProducts()};
