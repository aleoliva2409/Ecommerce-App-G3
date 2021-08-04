import React from 'react'
import Container from '@material-ui/core/Container'
import { Typography, Box } from '@material-ui/core'
import Cart from "../components/Cart/Cart";

const CartPage = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box my={5}>
          <Typography variant="h3" color="initial">Carrito</Typography>
        </Box>
        <Cart />
      </Container>
    </div>
  )
}

export default CartPage;
