import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './reducers/categoriesReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import ordersReducer from './reducers/ordersReducer';
import usersReducer from './reducers/userReducer'
import wishlistReducer from './reducers/wishlistReducer';
import colorReducer from './reducers/colorReducer';
import ReviewReducer from './reducers/ReviewReducer';

const rootReducers = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  cart: shoppingCartReducer,
  orders: ordersReducer,
  users: usersReducer,
  wishlists: wishlistReducer,
  color: colorReducer,
  reviews:ReviewReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
