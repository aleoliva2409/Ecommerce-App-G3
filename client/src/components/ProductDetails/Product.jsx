import {
  Card,
  CardMedia,
  CardContent,
  Box,
  makeStyles,
  Container,
  Typography,
  Button,
  IconButton,
  ButtonGroup,
  Badge,
  Grid,
} from '@material-ui/core';
import {
  Favorite,
  Add,
  Remove
} from '@material-ui/icons';
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

  function handlerBuyButton(){
    dispatch(addToCart({
      product,
      amount: Number(amountToBuy.innerText),
    }))
    alert(`product ${product.name} added to cart`);
  }

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
          <Container
            className={styles.addController}
          >
            <Typography
              variant={'h4'}
              color={'secondary'}
              id={'amountToBuy'}
            >
              {amount}
            </Typography>
            <ButtonGroup
              color={'primary'}
              orientation={'vertical'}
              className={styles.addControllerButtons}
            >
              <Button
                onClick={()=>setAmount((amount===product.stock) ? product.stock : amount+1)}
                disabled={(product.stock===0) ? true : false}
              >
                <Add/>
              </Button>
              <Button
                onClick={()=>setAmount((amount===0) ? 0 : amount-1)}
                disabled={(product.stock===0) ? true : false}
              >
                <Remove/>
              </Button>
            </ButtonGroup>
          </Container>
        </Grid>
        <Grid item className={styles.buyButtonContainer}>
          <Button
            variant={'contained'}
            color={'primary'}
            className={styles.buyButton}
            id={product.id}
            onClick={handlerBuyButton}
          >
            BUY
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
          Reviews
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
            >No Reviews Yet</Typography>
        }
      </Container>
    </Container>
  )
}

export default Product;
