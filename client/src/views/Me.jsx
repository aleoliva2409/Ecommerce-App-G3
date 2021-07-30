import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productActions";
import { getCategories } from "../redux/actions/categoriesActions";
import DasboardClient from "../components/Dashboard/DasboardClient";
import { Container } from "@material-ui/core";

const Me = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  const categories = useSelector((state) => state.categories.categories);
  const [render, setRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if(render) {
      setRender(false)
      dispatch(getAllProducts());
    }
  }, [dispatch, render]);

  const views = (url) => {
    switch(url) {
      case "/users/me/products":
        return (
          <div><h1>hola</h1></div>
        )

      case "/users/me/orders":
        return (
          <></>
        )

      case "/users/me/categories":
        return (
          <></>
        )

      case "/users/me/promote":
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
