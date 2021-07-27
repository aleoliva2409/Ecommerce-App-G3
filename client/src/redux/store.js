import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './reducers/categoriesReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';
import ordersReducer from './reducers/ordersReducer';
import usersReducer from './reducers/userReducer';
import colorReducer from './reducers/colorReducer';
import modelReducer from './reducers/modelReducer';
const rootReducers = combineReducers({
	categories: categoriesReducer,
  products: productReducer,
  cart: shoppingCartReducer,
  orders: ordersReducer,
  users: usersReducer,
  color: colorReducer,
  models:modelReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));

export default store;
