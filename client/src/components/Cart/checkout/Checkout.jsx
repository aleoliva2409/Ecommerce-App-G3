import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Link } from '@material-ui/core';
import { goToCheckout } from '../../../redux/actions/shoppingCartActions';
// * STYLES *
import {useStyles} from './CheckoutStyles';
import {useStylesDark} from './CheckoutSylesDark';

const Checkout = () => {

  const dispatch = useDispatch()

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

  const handleGoToCheckout = () => dispatch(goToCheckout());

  return (
    <Container className={classes.root} maxWidth="lg">
      <Box component="div">
        <Typography variant="h3">Total:</Typography>
        {/* //! MISSING TOTAL PRICE */}
        xxxxxxxxxxxxxxxxx
      </Box>
      <Box component="div">
        <Button onClick={handleGoToCheckout} fullWidth={true} variant="contained">
          Checkout
        </Button>
      </Box>
      <Box component="div">
        <Link component={RouterLink} to="/products">
          <Typography paragraph={true}>Seguir Comprando</Typography>
        </Link>
      </Box>
    </Container>
  )
}

export default Checkout
