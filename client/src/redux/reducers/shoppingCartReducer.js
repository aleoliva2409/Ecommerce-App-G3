import { ADD_PRODUCT, REMOVE_FROM_CART, ADJUST_QUANTITY, RESET_CART } from './../actions/shoppingCartActions.js';

const initialState = {
  clientID: "",
  products: [],
  productsOnCart: []
}

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, productsOnCart: [...state.productsOnCart, ...action.payload] }; //* push a product to cart
    case REMOVE_FROM_CART:
      return { ...state, productsOnCart: state.productsOnCart.filter((item) => item !== action.payload) }
    case ADJUST_QUANTITY:
      return { ...state, productsOnCart: state.productsOnCart + action.payload.quantity }
    case RESET_CART:
      return { ...state }
    default:
      return state;
  }
}

export default shoppingCartReducer;
