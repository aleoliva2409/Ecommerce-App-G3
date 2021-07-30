import React, { useState } from "react";
import OrdersTable from "./OrdersTable";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";


// ! user viene por props,
const Search = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const paginations = () => {
    if (search.length === 0) {
      return user.orders?.slice(currentPage, currentPage + 5);
    }

    const filteredOrders = user.orders.filter((order) =>
      order.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredOrders.slice(currentPage, currentPage + 5);
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
    if (
      user.orders?.filter((order) => order.name?.includes(search)).length >
      currentPage + 8
    ) {
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
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h4" color="initial">
          Lista de productos
        </Typography>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
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
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <OrdersTable
          orders={paginations()}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box display="flex" justifyContent="space-evenly" mt={1}>
          <IconButton
            aria-label="previous"
            onClick={prevPage}
            disabled={prevBtn()}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton aria-label="next" onClick={nextPage} disabled={nextBtn()}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
