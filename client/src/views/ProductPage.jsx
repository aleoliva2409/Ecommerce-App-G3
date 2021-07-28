import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  activeLoading,
  getModelDetails,
} from "../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import ModelProduct from "./../components/ProductDetails/Product.jsx";
import { Typography } from "@material-ui/core";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.productDetail)
  const productModels = useSelector(state => state.models.modelList)
  const isLoading = useSelector(state => state.products.isLoading)

  useEffect(() => {
      dispatch(activeLoading());
      dispatch(getModelDetails(id));
  }, [dispatch,id]);

  return isLoading ? (
    <Typography variant="h4" color="initial">Cargando...</Typography>
  ) : (
    <ModelProduct product={product}  isLoading={isLoading} />
  );
};

export default ProductPage;
