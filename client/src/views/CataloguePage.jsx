import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import FilterProducts from '../components/Products/FilterProducts';
import Catalogue from '../components/Products/Catalogue';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';
import { getProducts } from "../redux/actions/productActions";

const CataloguePage = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [ dispatch ]);

  console.log(products)
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        All products
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={2}>
          <FilterProducts />
        </Grid>
        <Grid item xl={10}>
          <Catalogue products={products}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CataloguePage;
