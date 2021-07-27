import React from 'react'
import { Button, Container, Grid, Typography, ButtonGroup, Box} from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import { Add, Remove } from '@material-ui/icons';
import { adjustQuantity, removeFromCart, resetCart } from '../../redux/actions/shoppingCartActions';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkout from './checkout/Checkout.jsx';
// * STYLES *
import {useStyles} from './CartStyles';
import {useStylesDark} from './CartStylesDark';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  //const totalPrice = cartItems.reduce((acc, crr) => acc + (crr.product.price * crr.amount), 0)

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

  const setAmount = (item,num) =>{
    dispatch(adjustQuantity(item,num))
  }

  const remove = (item) => {
    dispatch (removeFromCart(item))
  }

  const emptyCart = () => {
    console.log('cart')
    dispatch (resetCart())
  }
  return (
    <Container className={classes.root}>
      {
        cartItems.map(item => (
            <Grid container className={classes.cardItem}>
              <Box component="div">
                <Typography className={classes.name} variant="h4">{item.name}</Typography>
              </Box>
              <Box component="div">
                <Box component="img" className={classes.img} src={item.image[0]} />
              </Box>
              <Box className={classes.priceQuantity} component="div">
                <Typography className={classes.price} variant="h4">$ {item.price}</Typography>
                <ButtonGroup color={'primary'} orientation={'horizontal'} className={classes.quantityController}>
                  <Button onClick={()=>setAmount(item,-1)} disabled={(item.qty===1)? true : false}>
                    <Remove/>
                  </Button>
                  <Typography className={classes.quantity} variant="overline">
                    {item.qty}
                  </Typography>
                  <Button onClick={()=>setAmount(item,1)} disabled={(item.stock===item.qty) ? true : false}>
                    <Add/>
                  </Button>
                </ButtonGroup>
              </Box>
              <Button className={classes.clearItem} onClick={()=>remove(item)}>
                <ClearIcon/>
              </Button>
            </Grid>
        ))}
        <Checkout />
        <Button className={classes.deleteForever} onClick={emptyCart}>
          <DeleteForeverIcon fontSize="large"/>
        </Button>
    </Container>
  )
}

export default Cart
