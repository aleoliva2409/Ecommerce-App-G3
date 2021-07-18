import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudProduct from "../components/CrudProduct/CrudProduct";
import { getProducts } from "../redux/actions/productActions";
import { getCategories } from "../redux/actions/categoriesActions";
import Dashboard from "../components/Dashboard/Dashboard";
import { Container } from "@material-ui/core";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  const categories = useSelector((state) => state.categories.categories);
  const [render, setRender] = useState(false);

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

  return (
    <Container maxWidth="xl">
      <Dashboard>
        <CrudProduct
            products={products}
            categories={categories}
            state={render}
            setState={setRender}
          />
      </Dashboard>
    </Container>
  );
};

export default DashboardPage;
