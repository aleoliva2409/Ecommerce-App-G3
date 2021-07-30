import {
  GET_ALL_ORDERS,
  UPDATE_ORDER,
  GET_ORDER,
  GET_ORDERS_BY_USER,
} from "../actions/ordersActions";

const initialState = {
  ordersList: [],
  order: {},
  message: {},
  ordersByUser: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return { ...state, ordersList: action.payload }; //* all orders list
    case GET_ORDER:
      return { ...state, order: action.payload }; //* one order details
    case UPDATE_ORDER:
      return { ...state, message: action.payload }; //* message with the error or confirmation of put route
    case GET_ORDERS_BY_USER:
      return { ...state, ordersByUser: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
