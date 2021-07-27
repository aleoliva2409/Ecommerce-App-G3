import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Catalogue = ({ productModels, currentPage, setCurrentPage }) => {

  // const [currentPage, setCurrentPage] = useState(0);

  const paginations = () => {
    if(productModels.length > 0) {
      return productModels.slice(currentPage, currentPage + 12);
    }
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
    if (productModels.length > currentPage + 12) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box p={3}>
      <Grid container spacing={6} >
        {paginations() &&
          paginations().map((productModel) => (
            productModel.price !== "0.00" &&
            <Grid item xl={3} lg={4} md={6} sm={6} xs={12} key={productModel.id}>
              <ProductCard productModel={productModel} />
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

export default Catalogue;
