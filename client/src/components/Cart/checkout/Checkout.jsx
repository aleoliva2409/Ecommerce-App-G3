import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button, Link } from "@material-ui/core";
import { goToCheckout } from "../../../redux/actions/shoppingCartActions";
import jwt from "jsonwebtoken";
// * STYLES *
import { useStyles } from "./CheckoutStyles";
import { useStylesDark } from "./CheckoutSylesDark";

const Checkout = ({ total }) => {
  const dispatch = useDispatch();

  //select color mode
  const dayMode = useStyles();
  const darkMode = useStylesDark();
  let classes;
  const actualColor = useSelector((state) => state.color);
  if (actualColor) {
    classes = darkMode;
  } else {
    classes = dayMode;
  }

  const user = jwt.decode(localStorage.getItem("jwt"));
  console.log(!!user);

  const handleGoToCheckout = () => {
    window.location.replace('/shipping')
    //dispatch(goToCheckout());
  };

  if (localStorage.getItem("jwt") && user.isadmin) {
    return (
      <Box component="div" className={classes.root} maxWidth="lg">
        <Box component="div">
          <Typography variant="h3">Total: ${total}</Typography>
        </Box>
        <Box component="div">
          <Button fullWidth={true} variant="contained" disabled>
            No puede realizar la compra
          </Button>
        </Box>
        <Box component="div">
          <Link
            component={RouterLink}
            color="inherit"
            className={classes.linkContainer}
            to="/products"
          >
            <Typography className={classes.link} paragraph={true}>
              SEGUIR COMPRANDO
            </Typography>
          </Link>
        </Box>
      </Box>
    );
  }

  if (localStorage.getItem("jwt") && !user.isadmin) {
    return (
      <Box component="div" className={classes.root} maxWidth="lg">
        <Box component="div">
          <Typography variant="h3">Total: ${total}</Typography>
        </Box>
        <Box component="div">
          <Button
            onClick={handleGoToCheckout}
            fullWidth={true}
            variant="contained"
          >
            COMPRAR
          </Button>
        </Box>
        <Box component="div">
          <Link
            component={RouterLink}
            color="inherit"
            className={classes.linkContainer}
            to="/products"
          >
            <Typography className={classes.link} paragraph={true}>
              SEGUIR COMPRANDO
            </Typography>
          </Link>
        </Box>
      </Box>
    );
  }

  if (!localStorage.getItem("jwt")) {
    return (
      <Box component="div" className={classes.root} maxWidth="lg">
        <Box component="div">
          <Typography variant="h3">Total: ${total}</Typography>
        </Box>
        <Box component="div">
          <Button
            fullWidth={true}
            variant="contained"
          >
            Por favor inisie sesion
          </Button>
        </Box>
        <Box component="div">
          <Link
            component={RouterLink}
            color="inherit"
            className={classes.linkContainer}
            to="/products"
          >
            <Typography className={classes.link} paragraph={true}>
              SEGUIR COMPRANDO
            </Typography>
          </Link>
        </Box>
      </Box>
    );
  }
  
};

export default Checkout;
