import React from 'react'
import { Card, CardMedia, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { cartStyle } from './CartStyles.js';
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(cartStyle)

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.productsOnCart)
  //const totalPrice = cartItems.reduce((acc, crr) => acc + (crr.product.price * crr.amount), 0)

  const styles = useStyles();
  return (
    <Container className={styles.root}>
      {
        cartItems.map(item => (
          <Card className={styles.cartItem}>
            <CardMedia image={item.image[0]} className={styles.img}/>
            <Typography variant="h5">Hola{item.name}</Typography>
          </Card>
        ))
      }
    </Container>
  )
}

export default Cart
