import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUser } from "../redux/actions/ordersActions";
import { getCategories } from "../redux/actions/categoriesActions";
import DasboardClient from "../components/Dashboard/DasboardClient";
import { Container } from "@material-ui/core";
import ShoppingTable from "../components/Me/ShoppingTable";
import { useToken } from "../hooks/useToken"

const Me = () => {
  const dispatch = useDispatch();
  const { id } = useToken()
  const shoppingUser = useSelector((state) => state.orders.ordersByUser);
  const location = useLocation();

  useEffect(() => {
    dispatch(getOrdersByUser(id));
    dispatch(getCategories());
  }, [dispatch]);

  // useEffect(() => {
  //   if(render) {
  //     setRender(false)
  //     dispatch(getAllProducts());
  //   }
  // }, [dispatch, render]);

  const views = (url) => {
    switch(url) {
      case "/users/me/shopping":
        return (
          <ShoppingTable user={shoppingUser}/>
        )
      case "/users/me/favorites":
        return (
          <></>
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
      <DasboardClient>
        {views(location.pathname)}
      </DasboardClient>
    </Container>
  );
};

export default Me;
