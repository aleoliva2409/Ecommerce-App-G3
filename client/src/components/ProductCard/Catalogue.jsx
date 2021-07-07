import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'


const Catalogue = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <ProductCard />
      </Grid>
    </Grid>
  )
}

export default Catalogue;
