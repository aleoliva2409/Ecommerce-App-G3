import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageListItem from "@material-ui/core/ImageListItem";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   margin: "2rem",
  //   color: "transparent",
  // },
  // MuiContainerRoot: {
  //   paddingLeft: "0px",
  //   paddingRight: "0px",
  // },
  // imgs: {
  //   [theme.breakpoints.down("sm")]: {
  //     width: "300px",
  //   },
  // },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
}));
const itemData = [
  {
    img: "https://www.pillowtop.com.ar/wp-content/uploads/Sommier-Colchones-e1578370738569-600x600.jpg",
    title: "Colchón y sommier",
    author: "author",
    cols: 3,
  },
  {
    img: "https://www.pillowtop.com.ar/wp-content/uploads/1plaza-300x300.jpg",
    title: "1 plaza",
    author: "author",
    cols: 1,
  },
  {
    img: "https://www.pillowtop.com.ar/wp-content/uploads/2-plazas-principal-300x300.jpg",
    title: "2 plazas",
    author: "author",
    cols: 1,
  },
  {
    img: "https://www.pillowtop.com.ar/wp-content/uploads/Queen-DeepSleep-300x300.jpg",
    title: "Queen",
    author: "author",
    cols: 1,
  },
  {
    img: "https://www.pillowtop.com.ar/wp-content/uploads/King-Belspring3-300x300.jpg",
    title: "King",
    author: "author",
    cols: 1,
  },
];

export default function BasicImageList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{padding: 0, margin: "3rem auto"}}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xl={6} lg={6} md={7} sm={7} xs={10}>
          <Link component={RouterLink} to="/products">
            <ImageListItem component="div">
              <img
                src={itemData[0].img}
                alt="img not found"
                className={classes.img}
              />
              <ImageListItemBar title={itemData[0].title} />
            </ImageListItem>
          </Link>
        </Grid>
        <Grid container item spacing={1} xl={6} lg={6} md={7} sm={7} xs={10}>
          <Grid item xl={6} lg={6} md={6} sm={12}>
            <Link component={RouterLink} to="/products">
              <ImageListItem component="div">
                <img
                  src={itemData[1].img}
                  alt="img not found"
                  className={classes.img}
                />
                <ImageListItemBar title={itemData[1].title} />
              </ImageListItem>
            </Link>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Link component={RouterLink} to="/products">
              <ImageListItem component="div">
                <img
                  src={itemData[2].img}
                  alt="img not found"
                  className={classes.img}
                />
                <ImageListItemBar title={itemData[2].title} />
              </ImageListItem>
            </Link>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Link component={RouterLink} to="/products">
              <ImageListItem component="div">
                <img
                  src={itemData[3].img}
                  alt="img not found"
                  className={classes.img}
                />
                <ImageListItemBar title={itemData[3].title} />
              </ImageListItem>
            </Link>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Link component={RouterLink} to="/products">
              <ImageListItem component="div">
                <img
                  src={itemData[4].img}
                  alt="img not found"
                  className={classes.img}
                />
                <ImageListItemBar title={itemData[4].title} />
              </ImageListItem>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
