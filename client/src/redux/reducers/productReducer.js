import {
  GET_PRODUCT_DETAILS,
  ACTIVE_LOADING,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCT_UPDATE,
} from "../actions/productActions";

const initialState = {
  allProducts: [],
  searchProducts: [],
  productDetail: {},
  getProductUpdate: {},
  updatedProduct: {},
  deleteProduct: {},
  isLoading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return { ...state, searchProducts: action.payload }; //* Array with search products
    case GET_PRODUCTS:
      return { ...state, allProducts: action.payload }; //* Array with all products
    case GET_PRODUCT_DETAILS:
      return { ...state, productDetail: action.payload, isLoading: false }; //* Especific product data
    case ACTIVE_LOADING:
      return { ...state, isLoading: action.payload }; //* just set the loading variable
    case DELETE_PRODUCT:
      return { ...state, deleteProduct: action.payload }; //* delete product
    case UPDATE_PRODUCT:
      return { ...state, updatedProduct: action.payload}; // * update product
    case GET_PRODUCT_UPDATE:
      return { ...state, getProductUpdate: action.payload };
    default:
      return state;
  }
};

export default productReducer;
