import React from 'react'
import Container from '@material-ui/core/Container'
import AddProduct from './AddProduct';
import ProductsTable from './ProductsTable.jsx';
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core';

const CrudProduct = () => {
  return (
      <Container>
        <Grid container>
          <Grid item xl={12}>
            <Button variant="contained" color="primary">
              Add new
            </Button>
          </Grid>
          <Grid item xl={6}>
            <ProductsTable />
          </Grid>
          <Grid item xl={6}>
            <AddProduct />
          </Grid>
        </Grid>
      </Container>
  )
}

export default CrudProduct;
