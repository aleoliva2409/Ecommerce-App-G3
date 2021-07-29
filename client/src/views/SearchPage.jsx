import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import FilterProducts from "../components/Products/FilterProducts/FilterProducts";
import Catalogue from "../components/Products/Catalogue";
import { Container, Grid, Typography, Box, Button, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { getSearchProducts } from "../redux/actions/productActions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector((state) => state.products.searchProducts);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getSearchProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Box my={5}>
        <Typography variant="h3" color="initial">
          Búsqueda
        </Typography>
      </Box>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button variant="contained" style={{backgroundColor: "#00BBC9"}}>
            <Link component={RouterLink} to="/products" style={{color: 'white', textDecoration: 'none'}}>
              Ver catalogo
            </Link>
          </Button>
        </Grid>
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <Catalogue products={searchProducts} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;
