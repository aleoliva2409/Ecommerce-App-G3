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

export function ProductCard({id}) {

  const styles = useStyles();

  return (
      <Link
        className={styles.linkContainer}
        component={RouterLink}
        to={`/products/${id}`}
      >
        <Card
          className={styles.root}
        >
          <CardMedia
            className={styles.media}
            image={'https://www.pillowtop.com.ar/wp-content/uploads/Suavegom-Merit-Sommier-Mediano.jpg'}
          />
          <CardContent
            className={styles.data}
          >
            <Typography
              variant={'h1'}
              className={styles.title}
            >
              Colchón y Sommier Suavegom Fashion
            </Typography>
            <Typography
              variant={'button'}
              className={styles.price}
            >
              {'$10000'}
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
