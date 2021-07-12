import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/Products/FilterProducts/FilterProducts";
import Catalogue from "../components/Products/Catalogue";
import { Container, Grid, Typography } from "@material-ui/core";
import { getProducts } from "../redux/actions/productActions";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  const filterproducts = useSelector((state) => state.products.filterproducts.products);

  // ? sacar dispatch, all products dispatch from navbar!!!
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  let render;
  const [filter,setFilter] = useState(true);

  filter ? render=products : render = filterproducts;

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        Tienda
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
          <FilterProducts setFilter={setFilter}  />
        </Grid>
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <Catalogue products={render} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CataloguePage;
