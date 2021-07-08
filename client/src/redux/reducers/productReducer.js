import {
    GET_PRODUCT_DETAILS,
    ACTIVE_LOADING,
    GET_PRODUCTS,
    SEARCH_PRODUCTS
  } from "../actions/productActions";

const initialState = {
  allProducts: [],
  searchProducts: [],
  product: {},
  isLoading: true,

}

const productReducer = (state=initialState, action) => {
  switch(action.type){
    case SEARCH_PRODUCTS:
      return {...state, searchProducts: action.search}; //* Array with search products
    case GET_PRODUCTS:
      return {...state, allProducts: action.allProducts}; //* Array with all products
    case GET_PRODUCT_DETAILS:
      return {...state, product: action.product, isLoading: false}; //* Especific product data
    case ACTIVE_LOADING:
      return {...state, isLoading:action.isLoading}; //* just set the loading variable
    default:
      return state;
  }
}

export default productReducer;
