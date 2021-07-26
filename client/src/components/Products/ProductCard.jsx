import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Link as RouterLink } from 'react-router-dom';
import {Link} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../../redux/actions/shoppingCartActions.js";
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// * STYLES *
import {useStyles} from './ProductCardStyle';
import {useStylesDark} from './ProductCardStyleDark';

export default function RecipeReviewCard({product}) {
  
  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector(state => state.color)
  console.log(actualColor)
  if(actualColor){
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  const [favorites, setFavorites] = useState()

  const dispatch = useDispatch();

  const pushToCart = () => dispatch(addToCart(product,1));

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
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeaderP}
        title=
          {
            <Link component={RouterLink}
            style={{ textDecoration: 'none' }}
            to={`/products/${product.id}`}
            className={classes.headertitle}>{product.name}</Link>
          }
        subheader={
          <Typography
            component="p"
            className={classes.subheader}>{`Tamaño : ${product.size}`}
          </Typography>}
      />

      <CardMedia
        className={classes.media}
        image={product.image[0]}
        title={`image ${product.name}`}
      />

      <CardContent>
        <Typography  variant="h5" component="h5"  className={classes.price}>
          {`$ ${product.price}`}
        </Typography>
      </CardContent>

      <CardActions >
        <IconButton aria-label="Agregar a favoritos" >
          <FavoriteIcon />
        </IconButton>
{ noStock?
        <Button
          variant="contained"
          className={classes.button}
          disabled={true}
         >Agregar a carrito</Button>
         :
         <Button
         variant="contained"
         className={classes.button}
         onClick={pushToCart}
        >Agregar a carrito</Button>
}
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
