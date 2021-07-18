import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { checkoutStyles } from './CheckoutStyles';
import { Box, Container, Typography, Button, Link, makeStyles } from '@material-ui/core';
import { goToCheckout } from '../../../redux/actions/shoppingCartActions';

const useStyles = makeStyles(checkoutStyles);

const Checkout = () => {

  const dispatch = useDispatch()

  const styles = useStyles()

  const handleGoToCheckout = () => dispatch(goToCheckout());

  return (
    <Container className={styles.root} maxWidth="lg">
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
