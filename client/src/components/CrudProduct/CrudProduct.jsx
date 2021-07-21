import React from 'react'
import { useSelector } from "react-redux";
// import AddProduct from './AddProduct';
import Search from './Search.jsx';
import { Grid } from '@material-ui/core';

const CrudProduct = ({ products, categories, state, setState }) => {

  const productUpdate = useSelector(state => state.products.getProductUpdate)
  // const [btn, setBtn] = useState(false)


  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xl={10} lg={10} md={12} sm={12} xs={12}>
        <Search products={products} state={state} setState={setState}/>
      </Grid>
      {/* <Grid item xl={6} xs={12}>
        <Typography variant="h5" color="initial">Agregar nuevo producto</Typography>
        <AddProduct btnState={btn} btnChange={setBtn} product={productUpdate} categories={categories} state={state} setState={setState}/>
      </Grid> */}
    </Grid>
  )
}

export default CrudProduct;
