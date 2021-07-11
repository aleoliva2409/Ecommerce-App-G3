
import {
  ADD_PRODUCT,
} from './../actions/shoppingCartActions.js';

const initialState = {
  clientID : "",
  productsOnCart: []
}

const shoppingCartReducer = (state=initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT:
      return {...state, productsOnCart: state.productsOnCart.concat(action.product)}; //* push a product to cart
  }
  return state;
}

export default shoppingCartReducer;
