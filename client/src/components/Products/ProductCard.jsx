import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Container } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../redux/actions/shoppingCartActions.js';
import Box from '@material-ui/core/Box';
// * STYLES *
import { useStyles } from './ProductCardStyle';
import { useStylesDark } from './ProductCardStyleDark';

const ProductCard = ({ productModel }) => {
  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector(state => state.color);
  console.log(actualColor);
  if (actualColor) {
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  const [favorites, setFavorites] = useState();

  const dispatch = useDispatch();

  //const pushToCart = () => dispatch(addToCart(productModel,1));

  // const inLocal = useSelector(state => state.cart.items)
  // let noStock = false
  // for(let each of inLocal){
  //   if(each.id === productModel.id){
  //     if(each.stock === each.qty){
  //       noStock = true;
  //     }
  //   }
  // }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeaderP}
        title={
          <Link
            component={RouterLink}
            style={{ textDecoration: 'none' }}
            to={`/products/${productModel.id}`}
            className={classes.headertitle}
          >
            {productModel.name}
          </Link>
        }
        subheader={
          <Typography component="p" className={classes.subheader}>
            {`Marca : ${productModel.brand}`}
          </Typography>
        }
      />

      <CardMedia
        className={classes.media}
        image={productModel.image}
        title={`image ${productModel.name}`}
      />

      {/* <CardContent>
        <Typography  variant="h5" component="h5"  className={classes.price}>
          {`$ ${product.price}`}
        </Typography>
      </CardContent> */}
      <CardActions className={classes.cardact}>
        <IconButton aria-label="Agregar a favoritos">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>

        <Button
          variant="contained"
          className={classes.button}
          disabled={false}
          component={RouterLink}
          to={`/products/${productModel.id}`}
        >
          Ver Producto
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
