import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import Typography from '@material-ui/core/Typography'


const Catalogue = () => {
  return (
    <div>
      <Typography variant="h1" color="initial">Products</Typography>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default Catalogue;
