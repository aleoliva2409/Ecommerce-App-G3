import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CrudProduct from "../components/CrudProduct/CrudProduct";
import Table from '../components/OrdersTable/OrderTable';
import Categories from '../components/Categories/CategoriesOptions/CategoriesOptions';
import { getAllModels } from "../redux/actions/productActions";
import { getCategories } from "../redux/actions/categoriesActions";
import Dashboard from "../components/Dashboard/Dashboard";
import { Container } from "@material-ui/core";
import Promote from '../components/Promote/Promote';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const productsAll = useSelector((state) => state.products.allModels);
  const categories = useSelector((state) => state.categories.categories);
  const [render, setRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllModels());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if(render) {
      setRender(false)
      dispatch(getAllModels());
    }
  }, [dispatch, render]);

  const views = (url) => {
    switch(url) {
      case "/admin/dashboard/products":
        return (
          <CrudProduct
            productsAll={productsAll}
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
