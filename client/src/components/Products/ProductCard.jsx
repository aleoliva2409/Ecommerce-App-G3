import React from 'react';
import { cardStyle } from './ProductCardStyle.js';
import { makeStyles,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles(cardStyle);

export function ProductCard() {

  const styles = useStyles();

  return (
      <Box>
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
            {/* <Box
              className={styles.footer}
            >
              <Button
                variant={'contained'}
                color={'primary'}
              >BUY</Button>
              <Button
                className={styles.footerDetails}
              >Details</Button>
            </Box> */}
          </CardContent>
        </Card>
      </Box>
  )
}

export default ProductCard;
