import axios from "axios";

export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ACTIVE_LOADING = "ACTIVE_LOADING";

// * Set data of each product

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/all`);
    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// * SetLoading on true to display the loading component

export const activeLoading = () => {
  return {
    type: ACTIVE_LOADING,
    isLoading: true,
  };
};
