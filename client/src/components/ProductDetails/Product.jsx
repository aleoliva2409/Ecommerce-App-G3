import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Select,
  makeStyles,
  InputLabel,
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

function Product(){

  const styles = useStyles();
  const stock = 10;
  const colors = [{backgroundColor: 'black'}, {backgroundColor: 'white'}]
  const sizes = ["97X65","100X50","120X60","130X60","135X65","140X80"];

  return (
  <Container
    className={styles.root}
  >
    <Card
      className={styles.cardRoot}
    >
      <CardMedia
        className={styles.media}
        image={'https://www.pillowtop.com.ar/wp-content/uploads/Suavegom-Merit-Sommier-Mediano.jpg'}
      />
      <CardContent
        className={styles.content}
      >
        <Typography
          variant={'button'}
          className={styles.price}
        >
          {'$5000'}
        </Typography>
        <Typography
          variant={'caption'}
        >
          {(stock===0) ? 'unavailable' : 'available' }
        </Typography>
      </CardContent>
    </Card>
    <Typography
      variant={'h2'}
      className={styles.name}
    >
      Colchón Baby Belmo
    </Typography>
    <Container
      className={styles.options}
    >
    </Container>
    <Container
      className={styles.description}
    >
      <Typography
        variant={'body1'}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis officia odit beatae, corrupti sed voluptatem magnam autem, repellat commodi mollitia ipsam modi. Facilis dolores delectus nesciunt saepe odio tempora facere.
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
      {makeReviews().map(el=>{
        return (
          <Box
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
