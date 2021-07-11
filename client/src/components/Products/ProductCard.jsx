import React from "react";
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
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/actions/shoppingCartActions.js";
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// * STYLES *
import {useStyles} from './ProductCardStyle';

export default function RecipeReviewCard({product}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pushToCart = () => {
    dispatch(addToCart(product))
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
        title="Paella dish"
      />

      <CardContent>
        <Typography  variant="h5" component="h5"  className={classes.price}>
           {`$ ${product.price}`}
        </Typography>
      </CardContent>

      <CardActions >

        <IconButton aria-label="Agregar a favoritos">
          <FavoriteIcon />
        </IconButton>

        <Button
          variant="contained"
          className={classes.button}
          onClick={pushToCart}
         >Agregar a carrito</Button>

        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}
