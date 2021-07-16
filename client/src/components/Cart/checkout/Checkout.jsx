import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { checkoutStyles } from './CheckoutStyles';
import { Box, Container, Typography, Button, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(checkoutStyles);

const Checkout = () => {

  const styles = useStyles()

  return (
    <Container className={styles.root} maxWidth="lg">
      <Box component="div">
        <Typography variant="h3">Total:</Typography>
        {/* //! MISSING TOTAL PRICE */}
        xxxxxxxxxxxxxxxxx
      </Box>
      <Box component="div">
        <Button href="#" fullWidth={true} variant="contained">
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
