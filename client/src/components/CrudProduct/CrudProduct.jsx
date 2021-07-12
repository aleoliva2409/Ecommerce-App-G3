import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Container from '@material-ui/core/Container'
import AddProduct from './AddProduct';
import Search from './Search.jsx';
import { Grid, Typography } from '@material-ui/core';

const CrudProduct = ({ products, categories, state, setState }) => {

  const productUpdate = useSelector(state => state.products.getProductUpdate)
  const [btn, setBtn] = useState(false)


  return (
      <Container>
        <Grid container>
          <Grid item xl={6} xs={12}>
            <Typography variant="h5" color="initial">Lista de productos</Typography>
            <Search products={products} state={state} setState={setState}/>
          </Grid>
          <Grid item xl={6} xs={12}>
            <Typography variant="h5" color="initial">Agregar nuevo producto</Typography>
            <AddProduct btnState={btn} btnChange={setBtn} product={productUpdate} categories={categories} state={state} setState={setState}/>
          </Grid>
        </Grid>
      </Container>
  )
}

export default CrudProduct;
