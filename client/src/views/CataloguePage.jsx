import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilterProducts from "../components/Products/FilterProducts/FilterProducts";
import Catalogue from "../components/Products/Catalogue";
import { Container, Grid, Typography } from "@material-ui/core";

const CataloguePage = () => {
  const products = useSelector((state) => state.products.allProducts);
  const filterproducts = useSelector((state) => state.products.filterproducts.products);

  let render
  const [filter,setFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  filter ? render = products : render = filterproducts || [];

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" color="initial">Tienda</Typography>
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
          <FilterProducts setFilter={setFilter} setCurrentPage={setCurrentPage}/>
        </Grid>
        <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
          <Catalogue products={render} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CataloguePage;
