const { Order, User, Product } = require("../db");



const addCart = async (req, res, next) => {
  try {
      //llega del front un obj de guest 
      //{ email, pass, cart} cart es un array de objetos, tiene id_producto, precio y cantidad
    const { email, password, cartGuest } = req.body;
    if (email==="") {
     //no inicio sesion, email viene vacio
     return res.json({error: "No se ha encontrado el usuario para realizar la compra. Inicie sesión"}).status(404);
    } else {
      //si inicio sesion, email tiene contenido, lo busco en la tabla de usuarios
      const user = await User.findOne({
        where:{
          email
        }
      })

      if(user)
      {
        //existe el usuario
        //camino 1, Esta el usuario en order y  ya tenia cosas en Order->Cart. Modifico si alguna cambio y agrego las que no estan.
        //camino 2: Esta el usuario en order y no tiene cosas en Order->Cart. Agrego el cartGuest tal cual como está.
        //camino 3: No esta el usuario, lo agrego y le paso el cartGuest igual. 
        
  
        const orderUser = await Order.findOne({
          where:{
            userId: user.id,
            orderState: 'cart',
          }
        });

        //camino 1 y 2
        if(orderUser)
        {
          //ya tiene cosas el carrito
          const carro =[];
          if(orderUser.cart.length>0)
          {
            for(elementGuest of cartGuest)
            {
              for(elementCart of orderUser.cart)
              {
                if(elementGuest.id_product === elementCart.id_product)
                { 
                  const cantidadDsiponible = await Product.findOne({
                    where:{
                      id: elementGuest.id_product,
                    }
                    
                  });

                  if(elementGuest.cantidad > cantidadDsiponible.dataValues.stock)
                  {
                    return res.json({error: `no hay stock disponible del producto ${cantidadDsiponible.dataValues.name}`}).status(400);
                    
                  }
                  else{
                    carro.push(elementGuest);
                  }
                  
                  break;
                }
              }
            }
            const arrayFull = carro.concat(cartGuest);

            const final = new Set(arrayFull);
            let result =[...final];

            await Order.update({
              cart:result
            },
             {
              where:{
                userId:user.id
             } 
              });
          return res.json({mesagge: "carrito actualizado"}).status(200); 

          }
          else{
            //no tiene cosas el carrito

            for(item of cartGuest)
          {
            var stock = await Product.findOne({
              where:{
                id: item.id_product,
              }
              
            })
            if(item.cantidad > stock.dataValues.stock)
            {
  
              return res.json({error: `No hay stock disponible del producto ${stock.dataValues.name}`}).status(400);
            }
        }
        console.log(cartGuest);
          await Order.update({
          cart:cartGuest
        },
         {
          where:{
            userId:user.id
         } 
          });
            return res.json({message: 'se creo el carrito con exito'}).status(200);
          }
        }
        else{
          //camino 3

          for(element of cartGuest)
          {
            var stockDis = await Product.findOne({
              where:{
                id: element.id_product,
              }
              
            })

            if(element.cantidad > stockDis.dataValues.stock)
            {
  
              return res.json({error: `No hay stock disponible del producto ${stockDis.dataValues.name}`}).status(400);
            }
        }
        const orderNew = Order.create({
          orderState: 'cart',
          userId: user.id,
          cart: cartGuest
        })
        return res.json({mesagge: "Se creo el carrito"}).status(200); 
      }
      }
      else{
        return res.json({error: "No se puede crear el carrito"}).status(404);
      }

    }
  } catch (error) {
    next(error);
  }
};

const getCartAll = async (req, res, next) => {
  try {
    const dbProducts = await Order.findAll();
    res.status(200).json(dbProducts);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addCart,
  getCartAll
}