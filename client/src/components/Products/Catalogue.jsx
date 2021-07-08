import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import Box from "@material-ui/core/Box";

const Catalogue = () => {
  return (
    <Box p={3}>
      <Grid container spacing={5}>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xl={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Catalogue;
