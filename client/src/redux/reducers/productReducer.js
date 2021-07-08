import { GET_PRODUCT_DETAILS,
  ACTIVE_LOADING,
  GET_PRODUCTS,
  } from "../actions/productActions";

const initialState = {
  allProducts: [],
  product: {},
  isLoading: true,
}

const productReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_PRODUCTS:
      return {...state, allProducts: action.allProducts}; //* Array with all products
    case GET_PRODUCT_DETAILS:
      return {...state, product: action.product, isLoading: false}; //* Especific product data
    case ACTIVE_LOADING:
      return {...state, isLoading:action.isLoading}; //* just set the loading variable
  }
  return state;
}

export default productReducer;
