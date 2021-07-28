import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CrudProduct from "../components/CrudProduct/CrudProduct";
import Table from '../components/OrdersTable/OrderTable';
import Categories from '../components/Categories/CategoriesOptions/CategoriesOptions';
import { getModels } from "../redux/actions/productActions";
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
    dispatch(getModels());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if(render) {
      setRender(false)
      dispatch(getModels());
    }
  }, [dispatch, render]);

  const views = (url) => {
    switch(url) {
      case "/admin/dashboard/products":
        return (
          <CrudProduct
            products={products}
            categories={categories}
            state={render}
            setState={setRender}
          />
        )

      case "/admin/dashboard/orders":
        return (
          <Table />
        )

      case "/admin/dashboard/categories":
        return (
          <Categories />
        )

      case "/admin/dashboard/promote":
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
