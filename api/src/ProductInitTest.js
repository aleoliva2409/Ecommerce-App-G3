const { Category, Product } = require('./db.js');
const axios = require('axios');

async function setProducts(){
  let products = [
    {
      name: 'Almohada Belmo Memory Foam',
      color: 'white',
      size: '50X70',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam-1.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/belmo-memoryfoam2-1.jpg'],
      stock: 5,
      price: 3200,
    },
    {
      name: 'Almohada Cannon Viscoelástica',
      color: 'white',
      size: 'null',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/cannon-visco.png'],
      stock: 1,
      price: 4500,
    },
    {
      name: 'Almohada Cannon Viscoelástica Cervical',
      color: 'white',
      size: 'null',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/cannonalmohada.jpg'],
      stock: 3,
      price: 4500,
    },
    {
      name: 'Almohada Nativa Triangular',
      color: 'white',
      size: '35X35',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/triangulo.jpg'],
      stock: 1,
      price: 1500,
    },
    {
      name: 'Almohada Palette Cervical Viscoelástica',
      color: 'white',
      size: '40X60',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Palette-Viscosmart-Cervical.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Palette-Viscosmart-Detalle.jpg'],
      stock: 5,
      price: 3200,
    },
    {
      name: 'Almohada Palette Extra Firme',
      color: 'white',
      size: '50X70',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Palette-Boris-Urban-Extra-Firme.jpg'],
      stock: 0,
      price: 1380,
    },
    {
      name: 'Almohada Palette Suave',
      color: 'white',
      size: '50X70',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Palette-Suave.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Palette-Suave-Detalle.jpg'],
      stock: 0,
      price: 1400,
    },
    {
      name: 'Almohada Palette Visco Smart',
      color: 'white',
      size: '40x60',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/Palette-Viscosmart.jpg', 'https://www.pillowtop.com.ar/wp-content/uploads/Palette-Viscosmart-Detalle.png'],
      stock: 5,
      price: 3000,
    },
    {
      name: 'Almohada Piero Cervical',
      color: 'white',
      size: '65x35',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque dolor unde incidunt harum perspiciatis similique, voluptate sed aspernatur voluptates.',
      image: ['https://www.pillowtop.com.ar/wp-content/uploads/almoha.png'],
      stock: 5,
      price: 2499,
    },
  ]

  let newPoduct = await Product.bulkCreate(products);
  console.log(newPoduct.length+" Products Created to Test");
}

module.exports = async () => { await setProducts()};
