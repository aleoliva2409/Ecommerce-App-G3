import React from 'react'
import { Button, Card, CardMedia, Container, Typography, ButtonGroup} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { cartStyle } from './CartStyles.js';
import { useSelector, useDispatch } from "react-redux";
import { Add, Remove } from '@material-ui/icons';
import { adjustQuantity, removeFromCart, resetCart } from '../../redux/actions/shoppingCartActions';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
    console.log('cart')
    dispatch (resetCart())
  }
  return (
    <Container className={styles.root}>
      {
        cartItems.map(item => (
          <Card className={styles.cartItem}>
            <Container
            className={styles.addController}
          >
            <Typography
              variant={'h4'}
              color={'secondary'}
              id={'amountToBuy'}
            >
              {item.qty}
            </Typography>
            <ButtonGroup
              color={'primary'}
              orientation={'vertical'}
              className={styles.addControllerButtons}
            >
              <Button
               onClick={()=>remove(item)}
              >
                <ClearIcon/>
              </Button>
              <Button
                onClick={()=>setAmount(item,1)}
                disabled={(item.stock===item.qty) ? true : false}
              >
                <Add/>
              </Button>
              <Button
                onClick={()=>setAmount(item,-1)}
                disabled={(item.qty===1)? true : false}
              >
                <Remove/>
              </Button>
            </ButtonGroup>
          </Container>
            <CardMedia image={item.image[0]} className={styles.img}/>
            <Typography variant="h5">{item.name}</Typography>
          </Card>
        ))
      }
      <Button
        onClick={emptyCart}
      >
        <DeleteForeverIcon fontSize="large"/>
      </Button>
    </Container>
  )
}

export default Cart
