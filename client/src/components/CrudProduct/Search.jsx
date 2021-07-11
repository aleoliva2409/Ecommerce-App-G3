import React, { useState } from 'react'
import ProductsTable from './ProductsTable.jsx';
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


const Search = ({ products, search, setSearch }) => {

  console.log(products)

  const [currentPage, setCurrentPage] = useState(0);

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
    <FormControl >
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        margin="normal"
        onChange={handleSearch}
        value={search}
      />
      <ProductsTable products={paginations()}/>
      <Box display="flex" justifyContent="space-evenly" mt={1}>
        <IconButton aria-label="previous" onClick={prevPage} disabled={prevBtn()}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" onClick={nextPage} disabled={nextBtn()}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </FormControl>
  )
}

export default Search

