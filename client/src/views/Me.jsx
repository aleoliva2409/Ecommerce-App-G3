import React, { useEffect, useState, Fragment } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUser } from "../redux/actions/ordersActions";
import { getWishlist } from '../redux/actions/wishlistAction';
import { getCategories } from "../redux/actions/categoriesActions";
import DasboardClient from "../components/Dashboard/DasboardClient";
import { Box, Container, Typography } from "@material-ui/core";
import ShoppingTable from "../components/Me/ShoppingTable";
import ListFavorites from '../components/Favorites/ListFavorites';
import { useToken } from "../hooks/useToken"

const Me = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [render, setRender] = useState(false)
  const dispatch = useDispatch();
  const { id, email } = useToken()
  const shoppingUser = useSelector((state) => state.orders.ordersByUser);
  const favorites = useSelector((state) => state.wishlists.favorites);
  const location = useLocation();
  const user = localStorage.getItem("user").split("@");

  useEffect(() => {
    dispatch(getOrdersByUser(id));
    dispatch(getWishlist(email));
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (render) {
      dispatch(getWishlist(email))
      setRender(false)
    }
  }, [render])

  const views = (url) => {
    switch (url) {
      case "/users/me/shopping":
        return (
          <ShoppingTable user={shoppingUser} />
        )
      case "/users/me/favorites":
        return (
          <Fragment>
            <Typography variant="h3" color="initial">Favoritos</Typography>
            <ListFavorites products={favorites} currentPage={currentPage} setCurrentPage={setCurrentPage} setRender={setRender} />
          </Fragment>
        )
      case "/users/me/settings":
        return (
          <></>
        )
      default:
        break;
    }
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography variant="h1">Bienvenix {user[0]}!</Typography>
      </Box>
      <DasboardClient>
        {views(location.pathname)}
      </DasboardClient>
    </Container>
  );
};

export default Me;
