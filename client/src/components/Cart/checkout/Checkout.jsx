import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, Link } from '@material-ui/core';
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
    <Box component="div" className={classes.root} maxWidth="lg">
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
        <Link component={RouterLink} color="inherit" className={classes.linkContainer} to="/products">
          <Typography className={classes.link} paragraph={true}>SEGUIR COMPRANDO</Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Checkout
