import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import Box from "@material-ui/core/Box";

const Catalogue = ({products}) => {
  return (
    <Box p={3}>
      <Grid container spacing={6} >
        {products &&
          products.map((product) => {
            if(product.price !== '0.00'){
              return (
                <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={product.id}>
                  <ProductCard product={product}/>
                </Grid>
              )
            }
          })}
      </Grid>
    </Box>
  );
}

export default Catalogue;
