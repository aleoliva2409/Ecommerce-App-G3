import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "../components/Products/FilterProducts/FilterProducts";
import Catalogue from "../components/Products/Catalogue";
import { Container, Grid, Typography } from "@material-ui/core";
import { getSearchProducts } from "../redux/actions/productActions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector((state) => state.products.searchProducts);
  const filterproducts = useSelector((state) => state.products.filterproducts.products);

  let render
  const [filter,setFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  filter ? render = searchProducts : render = filterproducts || [];

  useEffect(() => {
    dispatch(getSearchProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">
        Búsqueda
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
          <FilterProducts setFilter={setFilter} setCurrentPage={setCurrentPage}/>
        </Grid>
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <Catalogue productModels={render} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchPage;
