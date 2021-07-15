import { Card, CardMedia, CardContent, Box, makeStyles, Container, Typography, Button, IconButton, ButtonGroup, Badge, Grid } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { useState } from 'react';
import { styleProduct } from './ProductStyle.js';
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/actions/shoppingCartActions.js";

const useStyles = makeStyles(styleProduct);

// function makeReviews(){
//   let reviews = [];
//   for(let i=0; i<5; i++){
//     reviews.push({
//       author: `Author${i}`,
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus consectetur ex laborum dolore temporibus nostrum eligendi quidem iusto hic.'
//     })
//   }
//   return reviews;
// }

function Product({product}){

  const amountToBuy = document.getElementById('amountToBuy');

  const styles = useStyles();
  const dispatch = useDispatch();

  const pushToCart = () => dispatch(addToCart(product,1));

  function handlerFavoriteButton(){
    setInvisible(!invisible);
  };

  const [invisible,setInvisible] = useState(true);
  const [amount,setAmount] = useState(0);

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
            {(product.stock===0) ? 'unavailable' : 'available' }
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
          <Button
            variant={'contained'}
            color={'primary'}
            className={styles.buyButton}
            id={product.id}
            onClick={pushToCart}
          >
            Añadir al Carrito
          </Button>
        </Grid>
      </Grid>
      <Container
        className={styles.description}
      >
        <Typography
          variant={'body1'}
        >
          {product.description}
        </Typography>
      </Container>
      <Container
        className={styles.reviews}
      >
        <Typography
          variant={'subtitle2'}
        >
          Comentarios
        </Typography>
        {
          (product.reviews && product.reviews.length>0) ?
            product.reviews.map((el,i) => {
              return <Box
                key={i}
                component={'fieldset'}
              >
                <legend>{el.author}</legend>
                <Typography
                  variant={'body2'}
                >
                  {el.description}
                </Typography>
              </Box>
            })
            :
            <Typography
              variant={'h3'}
            >No hay comentarios para este producto</Typography>
        }
      </Container>
    </Container>
  )
}

export default Product;
