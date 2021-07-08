import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cardStyle } from './ProductCardStyle.js';
import { makeStyles,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles(cardStyle);

const ProductCard = ({product}) => {

  const styles = useStyles();

  return (
      <Link
        className={styles.linkContainer}
        component={RouterLink}
        to={`/products/${product.id}`}
      >
        <Card
          className={styles.root}
        >
          <CardMedia
            className={styles.media}
            image={product.image[0]}
          />
          <CardContent
            className={styles.data}
          >
            <Typography
              variant={'h1'}
              className={styles.title}
            >
              {product.name}
            </Typography>
            <Typography
              variant={'button'}
              className={styles.price}
            >
              {product.price}
            </Typography>
            <Box
              className={styles.footer}
            >
              <Button
                variant={'contained'}
                color={'primary'}
              >BUY</Button>
              <Button
                className={styles.footerDetails}
              >Details</Button>
            </Box>
          </CardContent>
        </Card>
      </Link>
  )
}

export default ProductCard;
