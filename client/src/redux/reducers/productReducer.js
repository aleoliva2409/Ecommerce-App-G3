import {
  GET_PRODUCT_DETAILS,
  ACTIVE_LOADING,
  GET_PRODUCTS,
} from "../actions/productActions";

const initialState = {
  allProducts: [],
  productDetails: {},
  isLoading: true,
}

const productReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_PRODUCTS:
      return {...state, allProducts: action.payload}; //* Array with all products
    case GET_PRODUCT_DETAILS:
      return {...state, productDetails: action.payload, isLoading: false}; //* Especific product data
    case ACTIVE_LOADING:
      return {...state, isLoading:action.isLoading}; //* just set the loading variable
    default:
      return state;
  }
}

export default productReducer;
