import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';
import { getWishlist } from '../../redux/actions/wishlistAction';
// * STYLES *
import { useStyles } from './WishlistByUserStyles';

const WishlistByUser = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const wishlist = useSelector(state => state.wishlist.favorites)
  const products = useSelector((state) => state.products.allProducts);


  useEffect(() => {
    dispatch(getWishlist())
  }, [dispatch])

  const favs = [];

  for (const item of wishlist) {
    for (const product of products) {
      if (item == product.id) {
        favs.push(product)
      }
    }
  }

  return (
    <Container>
      <Typography variant="h3">Favoritos</Typography>
      {
        favs?.map(item => (
          <Box componen="div" className={classes.cards} key={item.id}>
            <ProductCard className={classes.card} product={item} />
          </Box>
        ))
      }
    </Container>
  )
}

export default WishlistByUser;
