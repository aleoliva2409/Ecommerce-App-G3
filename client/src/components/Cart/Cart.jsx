import React from 'react'
import { Button, IconButton, Container, Grid, Typography, ButtonGroup, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { cartStyle } from './CartStyles.js';
import { useSelector, useDispatch } from "react-redux";
import { Add, Remove } from '@material-ui/icons';
import { adjustQuantity, removeFromCart, resetCart } from '../../redux/actions/shoppingCartActions';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkout from './checkout/Checkout.jsx';

const useStyles = makeStyles(cartStyle)

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  //const totalPrice = cartItems.reduce((acc, crr) => acc + (crr.product.price * crr.amount), 0)

  const styles = useStyles();

  const setAmount = (item,num) =>{
    dispatch(adjustQuantity(item,num))
  }

  const remove = (item) => {
    dispatch (removeFromCart(item))
  }

  const emptyCart = () => {
    dispatch (resetCart())
  }
  return (
    <Container className={styles.root}>
      <Box component="div" className={styles.cardsContainer}>
        {
          cartItems.map(item => (
              <Grid container className={styles.cardItem}>
                <Box className={styles.nameBox} component="div">
                  <Typography className={styles.name} variant="h6">{item.name}</Typography>
                </Box>
                <Box component="div">
                  <Box component="img" className={styles.img} src={item.image[0]} />
                </Box>
                <Box className={styles.priceQuantity} component="div">
                  <Typography className={styles.price} variant="h4">$ {item.price}</Typography>
                  <ButtonGroup color={'primary'} orientation={'horizontal'} className={styles.quantityController}>
                    <Button onClick={()=>setAmount(item,-1)} disabled={(item.qty===1)? true : false}>
                      <Remove/>
                    </Button>
                    <Typography className={styles.quantity} variant="overline">
                      {item.qty}
                    </Typography>
                    <Button onClick={()=>setAmount(item,1)} disabled={(item.stock===item.qty) ? true : false}>
                      <Add/>
                    </Button>
                  </ButtonGroup>
                </Box>
                <Button className={styles.clearItem} onClick={()=>remove(item)}>
                  <ClearIcon/>
                </Button>
              </Grid>
          ))}
        </Box>
        <Checkout className={styles.checkout} />
        <Button className={styles.deleteForever} onClick={emptyCart}>
          <DeleteForeverIcon fontSize="large"/>
        </Button>
    </Container>
  )
}

export default Cart
