import React, { useEffect } from "react";
import { Card, CardMedia, CardContent, Box, makeStyles, Container, Typography, Button, IconButton, Badge, Grid } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../../redux/actions/shoppingCartActions.js";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Add, Remove } from '@material-ui/icons';
import {getModelByProduct} from  '../../redux/actions/productActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
// * STYLES *
import { useStyles } from './ProductStyle.js';

//PRODUCT DETAIL

const Product = ({product}) => {
  const classes = useStyles();

  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  // ! corregir lo que se le envia a carrito, tiene que ser el producto con sus variantes
  const pushToCart = () => dispatch(addToCart(product,1));

  function handlerFavoriteButton(){
    setInvisible(!invisible);
  };

  const [invisible,setInvisible] = useState(true);

  useEffect(() => {
    dispatch(getModelByProduct(product.id,product.products[0].id));
  }, [dispatch])

  const handleChange = (e) => {
    setSize(e.target.value);
    //console.log("VALUE " + e.target.value);
    dispatch(getModelByProduct(product.id,size));

  };
  const detailOne = useSelector((state) => state.productDetailOne);
  let algo = {...detailOne};
  console.log(algo);
  const inLocal = useSelector(state => state.cart.items)

  let noStock = false
  for(let each of inLocal){
    if(each.id === product.id){
      if(each.stock === each.qty){
        noStock = true;
      }
    }
  }

  return (
      <Grid container spacing={2}  className={classes.root}>

          <Grid item md={4} direction='column'>
              <img src={product.image}  alt={product.name} className={classes.img}/>

          </Grid>

          <Grid container item md={4}  direction='column'>

                <Grid container  direction='row' justifyContent="flex-end">
                     <FavoriteIcon/>
                </Grid>

                <Typography variant={'h2'} className={classes.names}
                  > {product.name}
                </Typography>
                <Box>

                    < Typography component="p" className={classes.tamanio}>
                      {`Tamaño : `}
                    </Typography>

                    <TextField id="select" defaultValue={product.products[0].id} onChange={(e)=>handleChange(e)} select className={classes.subheader}>
                       <MenuItem key={size.id}  value={size.id}>{size.size}</MenuItem>
                       {product &&
                        product.products?.map((size) => (
                              <MenuItem key={size.id}  value={size.id}>{size.size}</MenuItem>
                        ))}

                    </TextField>

               </Box>

                <Button  className={classes.ChooseSize}
                  > Agregar a Carrito
                </Button>

          </Grid>
          <Grid item md={4} direction='column'>
                <Typography variant={'h4'} className={classes.name}
                  > Stock disponible
                </Typography>
                < Typography component="p" className={classes.tamanio}>
                      {`Cantidad: `}
                </Typography>

                {/* <Typography variant={'h4'} className={classes.name}>
                        {`(${detailOne.product} disponibles)`}
                </Typography> */}

                 {/* < Typography component="p" className={classes.tamanio}>
                      {`(${detailOne.stock} disponibles)`}
                 </Typography> */}
          </Grid>
      </Grid>

        //--------------------------------------

//     <Container className={styles.root} >
//       <Card
//         className={styles.cardRoot}
//       >
//         <CardMedia
//           className={styles.media}
//           image={product.image}
//         />
//         <CardContent
//           className={styles.content}
//         >
//           <Typography
//             variant={'button'}
//             className={styles.price}
//           >
//             {`Marca : ${product.brand}`}
//           </Typography>
//           <Typography
//             variant={'caption'}
//           >
//             {(product.stock===0 || noStock) ? 'Sin Stock' : 'Disponible' }
//           </Typography>
//         </CardContent>
//       </Card>
//       <Typography
//         variant={'h2'}
//         className={styles.name}
//       >
//         {product.name}
//       </Typography>
//       <Grid
//       container
//         direction="column"
//         justifyItems={'center'}
//         alignItems={'center'}
//       >
//         <Grid item direction="row"
//           className={styles.options}
//         >
//           <IconButton color={'primary'} onClick={handlerFavoriteButton}>
//             <Badge color="secondary" variant={'dot'} invisible={invisible}>
//               <Favorite />
//             </Badge>
//           </IconButton>
//         </Grid>
//         <Grid item className={styles.buyButtonContainer}>
// { noStock?
//           <Button
//             variant={'contained'}
//             color={'primary'}
//             className={styles.buyButton}
//             id={product.id}
//             disabled = {true}
//           >
//             Añadir al Carrito
//           </Button>
//           :
//           <Button
//             variant={'contained'}
//             color={'primary'}
//             className={styles.buyButton}
//             id={product.id}
//             onClick={pushToCart}
//           >
//             Añadir al Carrito
//           </Button>
// }
//         </Grid>
//       </Grid>
//       <Container
//         className={styles.description}
//       >
//         <Typography
//           variant={'body1'}
//         >
//           {product.description}
//         </Typography>
//       </Container>
//       <Container
//         className={styles.reviews}
//       >
//         <Typography
//           variant={'subtitle2'}
//         >
//           Comentarios
//         </Typography>
//         {
//           (product.reviews && product.reviews.length>0) ?
//             product.reviews.map((el,i) => {
//               return <Box
//                 key={i}
//                 component={'fieldset'}
//               >
//                 <legend>{el.author}</legend>
//                 <Typography
//                   variant={'body2'}
//                 >
//                   {el.description}
//                 </Typography>
//               </Box>
//             })
//             :
//             <Typography
//               variant={'h3'}
//             >No hay comentarios para este producto</Typography>
//         }
//       </Container>
//     </Container>
  )
}

export default Product;
