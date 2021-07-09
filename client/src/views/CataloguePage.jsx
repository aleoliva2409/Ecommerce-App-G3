import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/Products/FilterProducts";
import Catalogue from "../components/Products/Catalogue";
import { Container, Grid, Typography } from "@material-ui/core";
import { getProducts } from "../redux/actions/productActions";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        Tienda
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
          <FilterProducts />
        </Grid>
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <Catalogue products={products} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CataloguePage;
