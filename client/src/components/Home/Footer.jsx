import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#00BBC9",
    color: "#FFF",
    height: "2rem",
    display: "flex",
    alignContent: "center",
    fontWeight: "500",
    letterSpacing: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" color="secondary" className={classes.root}>
      <Grid>E-Commerce Pillow Top © 2021</Grid>
    </Container>
  );
};

export default Footer;
