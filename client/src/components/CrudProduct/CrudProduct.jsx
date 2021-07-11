import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Container from '@material-ui/core/Container'
import AddProduct from './AddProduct.jsx';
import Search from './Search.jsx';
// import ProductsTable from './ProductsTable.jsx';
import { Grid, Typography } from '@material-ui/core';

const CrudProduct = ({ products }) => {

  const dispatch = useDispatch();
  const productUpdate = useSelector(state => state.products.getProductUpdate)
  const categories = useSelector(state => state.categories.categories)
  const [btn, setBtn] = useState(false)
  const [search, setSearch] = useState("")
  const [formProduct, setFormProduct] = useState({
    name: "",
    size: "",
    description: "",
    image: "",
    stock: 0,
    price: 0,
    categories: []
  })

  return (
      <Container>
        <Grid container>
          <Grid item xl={6} xs={12}>
            <Typography variant="h5" color="initial">Lista de productos</Typography>
            <Search products={products} search={search} setSearch={setSearch}/>
          </Grid>
          <Grid item xl={6} xs={12}>
            <Typography variant="h5" color="initial">Agregar nuevo producto</Typography>
            <AddProduct btnState={btn} btnChange={setBtn} product={productUpdate} categories={categories}/>
          </Grid>
        </Grid>
      </Container>
  )
}

export default CrudProduct;
