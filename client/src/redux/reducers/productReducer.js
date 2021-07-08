import { GET_PRODUCT_DETAILS, ACTIVE_LOADING } from "../actions/productActions";

const initialState = {
  product: {},
  isLoading: true,
}

const productReducer = (state=initialState, action) => {
  switch(action.type){
    case GET_PRODUCT_DETAILS:
      return {...state, product: action.product, isLoading: false};
    case ACTIVE_LOADING:
      return {...state, isLoading:action.isLoading};
  }
  return state;
}

export default productReducer;
