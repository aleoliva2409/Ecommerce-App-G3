import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid, Typography } from '@material-ui/core'
import Cart from "../components/Cart/Cart";

const CartPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h3" color="initial">Cart</Typography>
        <Cart />
      </Container>
    </div>
  )
}

export default CartPage;
