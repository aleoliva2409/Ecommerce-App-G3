import React from 'react';
import FilterProducts from '../components/Products/FilterProducts';
import Catalogue from '../components/Products/Catalogue';
import Container from '@material-ui/core/Container';
import { Grid, Typography } from '@material-ui/core';

const CataloguePage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        All products
      </Typography>
      <Grid container>
        <Grid item xl={2}>
          <FilterProducts />
        </Grid>
        <Grid item xl={10}>
          <Catalogue />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CataloguePage;
