import { Card, CardMedia, CardContent, Box, makeStyles, Container, Typography, Button, IconButton, Badge, Grid } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../../redux/actions/shoppingCartActions.js";
import Review from '../Review/Review';
import { styleProduct } from './ProductStyle.js';
import ReviewComments from '../Review/ReviewComments.jsx';
const useStyles = makeStyles(styleProduct);


function Product({product}){

  // const amountToBuy = document.getElementById('amountToBuy');

  const styles = useStyles();
  const dispatch = useDispatch();

  const user = localStorage.getItem('user');
  const pushToCart = () => dispatch(addToCart(product,1,user));

  function handlerFavoriteButton(){
    setInvisible(!invisible);
  };

  const [invisible,setInvisible] = useState(true);

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
    <Container
      className={styles.root}
    >
      <Card
        className={styles.cardRoot}
      >
        <CardMedia
          className={styles.media}
          image={product.image[0]}
        />
        <CardContent
          className={styles.content}
        >
          <Typography
            variant={'button'}
            className={styles.price}
          >
            {`$${product.price}`}
          </Typography>
          <Typography
            variant={'caption'}
          >
            {(product.stock===0 || noStock) ? 'Sin Stock' : 'Disponible' }
          </Typography>
        </CardContent>
      </Card>
      <Typography
        variant={'h2'}
        className={styles.name}
      >
        {product.name}
      </Typography>
      <Grid
      container
        direction="column"
        justifyItems={'center'}
        alignItems={'center'}
      >
        <Grid item direction="row"
          className={styles.options}
        >
          <IconButton color={'primary'} onClick={handlerFavoriteButton}>
            <Badge color="secondary" variant={'dot'} invisible={invisible}>
              <Favorite />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item className={styles.buyButtonContainer}>
{ noStock?
          <Button
            variant={'contained'}
            color={'primary'}
            className={styles.buyButton}
            id={product.id}
            disabled = {true}
          >
            Añadir al Carrito
          </Button>
          :
          <Button
            variant={'contained'}
            color={'primary'}
            className={styles.buyButton}
            id={product.id}
            onClick={pushToCart}
          >
            Añadir al Carrito
          </Button>
}
        </Grid>
      </Grid>
      <Container
        className={styles.description}
      >
        <Typography
          variant={'body1'}
        >
          {product.model.description}
        </Typography>
      </Container>

      <Grid container spacing={3}>
           <Grid item md={6} xs={12}>
              <Review />
          </Grid>
      </Grid>
      <Grid container spacing={3}>
           <Grid item md={6} xs={12}>
                <ReviewComments />
                {/* <Container className={styles.reviews} >
                <Typography variant={'subtitle2'}>
                  Comentarios
                </Typography>
                {
                  (product.reviews && product.reviews.length>0) ?
                    product.reviews.map((el,i) => {
                      return <Box key={i} component={'fieldset'}
                      >
                        <legend>{el.author}</legend>
                        <Typography variant={'body2'} >
                          {el.description}
                        </Typography>
                      </Box>
                    })
                    :
                    <Typography variant={'h3'}>No hay comentarios para este producto</Typography>
                }
                </Container> */}
          </Grid>
      </Grid>
    </Container>
  )
}

export default Product;

