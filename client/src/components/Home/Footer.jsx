import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { changeOrderStatus } from "../../redux/actions/shoppingCartActions";
import jwt from "jsonwebtoken";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#00BBC9",
    color: "#FFF",
    height: "2rem",
    alignContent: "center",
    fontWeight: "500",
    letterSpacing: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("status")) {
      const token = localStorage.getItem("jwt");
      const userId = jwt.decode(token).id;
      const status = url
        .slice(url.indexOf("&status") + 1)
        .split("=")[1]
        .split("&")[0];
      dispatch(changeOrderStatus(userId, status));
    }
  }, [dispatch]);

  return (
    <Container maxWidth="xl" color="secondary" className={classes.root}>
      <Grid>E-Commerce Pillow Top © 2021</Grid>
    </Container>
  );
};

export default Footer;
