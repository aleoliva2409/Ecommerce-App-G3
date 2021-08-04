import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardFavorites from './CardFavorites'
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Typography } from '@material-ui/core';

const ListFavorites = ({ products, currentPage, setCurrentPage, setRender }) => {
  const paginations = () => {
    if(products?.length > 0) {
      return products.slice(currentPage, currentPage + 12);
    }
    return []
  };



  const prevPage = (e) => {
    setCurrentPage(currentPage - 12);
    e.preventDefault();
  };

  const nextPage = (e) => {
    setCurrentPage(currentPage + 12);
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
    if (products?.length > currentPage + 12) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box p={3}>
      <Grid container spacing={6} >
        {paginations()[0] === undefined ?
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h5">No tiene favoritos </Typography>
        </Grid> :
          paginations().map((product) => (
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={product.id}>
              <CardFavorites product={product} setRender={setRender}/>
            </Grid>
          ))
        }
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt={1}>
        <IconButton aria-label="previous" onClick={prevPage} disabled={prevBtn()}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" onClick={nextPage} disabled={nextBtn()}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ListFavorites;
