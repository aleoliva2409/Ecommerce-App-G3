import {
  Card,
  CardMedia,
  CardContent,
  Box,
  makeStyles,
  Container,
  Typography } from '@material-ui/core';
import { styleProduct } from './ProductStyle.js';


const useStyles = makeStyles(styleProduct);

function makeReviews(){
  let reviews = [];
  for(let i=0; i<5; i++){
    reviews.push({
      author: `Author${i}`,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus consectetur ex laborum dolore temporibus nostrum eligendi quidem iusto hic.'
    })
  }
  return reviews;
}
//
function Product({product}){

  const styles = useStyles();
  console.log(product);
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
      <Container
        className={styles.options}
      >
        <h2>hola mundo</h2>
      </Container>
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
        {makeReviews().map((el,i)=>{
          return (
            <Box
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

          )
        })}
      </Container>
    </Container>
  )
}

export default Product;
