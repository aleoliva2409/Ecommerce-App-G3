import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CrudProduct from "../components/CrudProduct/CrudProduct";
import Table from '../components/OrdersTable/OrderTable';
import Categories from '../components/Categories/CategoriesOptions/CategoriesOptions';
import { getProducts } from "../redux/actions/productActions";
import { getCategories } from "../redux/actions/categoriesActions";
import Dashboard from "../components/Dashboard/Dashboard";
import { Container } from "@material-ui/core";
import Promote from '../components/Promote/Promote';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  const categories = useSelector((state) => state.categories.categories);
  const [render, setRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if(render) {
      setRender(false)
      dispatch(getProducts());
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
          <Promote/>
        )

      default:
        break;
    }
  }

  return (
    <Container maxWidth="xl">
      <Dashboard>
        {views(location.pathname)}
      </Dashboard>
    </Container>
  );
};

export default DashboardPage;
