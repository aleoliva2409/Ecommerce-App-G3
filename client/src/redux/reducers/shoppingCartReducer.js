import { SET_CART, RESET_CART } from './../actions/shoppingCartActions.js';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]')
}

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, items: action.payload }; //* push a product to cart
    case RESET_CART:
      return { ...state, items:initialState.items }
    default:
      return state;
  }
}

export default shoppingCartReducer;
