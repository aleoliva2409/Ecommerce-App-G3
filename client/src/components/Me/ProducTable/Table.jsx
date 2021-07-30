import React, { useState } from 'react'
import ProductsTable from './ProducTable/ProductsTable';
import AddProduct from './AddProduct';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import EditProduct from './EditProduct';


const Search = ({ productsAll, productUpdate, state, setState, categories }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("")
  const [stateAddProduct, setStateAddProduct] = useState(false);
  const [stateEditProduct, setStateEditProduct] = useState(false);

  const openAddProduct = () => {
    setStateAddProduct(true);
  };

  const closeAddProduct = () => {
    setStateAddProduct(false);
  };

  const openEditProduct = () => {
    setStateEditProduct(true)
  }

  const closeEditProduct = () => {
    setStateEditProduct(false)
  }

  const paginations = () => {
    if (search.length === 0) {
      return productsAll.slice(currentPage, currentPage + 5);
    }

    const filteredProducts = productsAll.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredProducts.slice(currentPage, currentPage + 5);
  };

  const prevPage = (e) => {
    setCurrentPage(currentPage - 5);
    e.preventDefault();
  };

  const nextPage = (e) => {
    setCurrentPage(currentPage + 5);
    e.preventDefault();
  };

  const prevBtn = () => {
    if (currentPage > 0) {
      return false;
    } else {
      return true;
    }
  };

  const nextBtn = () => {
    if (productsAll.filter((product) => product.name.includes(search)).length > currentPage + 8) {
      return false;
    } else {
      return true;
    }
  };

  const handleSearch = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
    e.preventDefault();
  };

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h4" color="initial">Lista de productos</Typography>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <AddProduct productsAll={productsAll} categories={categories} state={state} setState={setState} open={stateAddProduct} formOpen={openAddProduct} formClose={closeAddProduct}/>
          <EditProduct productsAll={productsAll} product={productUpdate} categories={categories} state={state} setState={setState} open={stateEditProduct} formOpen={openEditProduct} formClose={closeEditProduct}/>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            margin="normal"
            onChange={handleSearch}
            value={search}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <ProductsTable products={paginations()} state={state} setState={setState} formOpen={openEditProduct}/>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box display="flex" justifyContent="space-evenly" mt={1}>
          <IconButton aria-label="previous" onClick={prevPage} disabled={prevBtn()}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton aria-label="next" onClick={nextPage} disabled={nextBtn()}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Search

