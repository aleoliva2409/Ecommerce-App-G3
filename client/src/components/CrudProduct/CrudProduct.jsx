import React from 'react'
import { useSelector } from "react-redux";
import Search from './Search.jsx';
import { Grid } from '@material-ui/core';

const CrudProduct = ({ productsAll, categories, state, setState }) => {

  const productUpdate = useSelector(state => state.products.getProductUpdate)

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" >
      <Grid item xl={10} lg={10} md={12} sm={12} xs={12} container direction="row" >
        <Search productsAll={productsAll} state={state} setState={setState} productUpdate={productUpdate} categories={categories}/>
      </Grid>
    </Grid>
  )
}

export default CrudProduct;
