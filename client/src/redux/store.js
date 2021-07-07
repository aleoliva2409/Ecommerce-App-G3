import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './reducers/categoriesReducer';

const rootReducers = combineReducers({
	categories: categoriesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));

export default store;
