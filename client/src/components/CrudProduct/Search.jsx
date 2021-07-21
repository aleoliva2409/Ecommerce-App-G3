import React, { useState } from 'react'
import ProductsTable from './ProductsTable';
import AddProduct from './AddProduct';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '200px',
  },

}));

const Search = ({ products, product, state, setState, categories }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("")

  const paginations = () => {
    if (search.length === 0) {
      return products.slice(currentPage, currentPage + 5);
    }

    const filteredProducts = products.filter((product) =>
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
    if (products.filter((product) => product.name.includes(search)).length > currentPage + 8) {
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
          <AddProduct product={product} categories={categories} state={state} setState={setState} />
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
        <ProductsTable products={paginations()} state={state} setState={setState}/>
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

