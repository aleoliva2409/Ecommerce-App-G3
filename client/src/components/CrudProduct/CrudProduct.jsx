import React, { useState } from 'react'
import { useSelector } from "react-redux";
import AddProduct from './AddProduct';
import Search from './Search.jsx';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const CrudProduct = ({ products, categories, state, setState }) => {

  const productUpdate = useSelector(state => state.products.getProductUpdate)
  const [btn, setBtn] = useState(false)


  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" >
      <Typography variant="h5" color="initial">Lista de productos</Typography>
      <Grid item xl={10} lg={10} md={12} sm={12} xs={12} container direction="row" >
        <AddProduct btnState={btn} btnChange={setBtn} product={productUpdate} categories={categories} state={state} setState={setState} />
        <Search products={products} state={state} setState={setState}/>
      </Grid>
    </Grid>
  )
}

export default CrudProduct;
