import { ADD_FAVORITE, REMOVE_FAVORITE, GET_WISHLIST } from './../actions/wishlistAction';

const initialState = {
  favorites: [],
  message: ""
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, message: action.payload.message };
    case REMOVE_FAVORITE:
      return { ...state, message: action.payload.message };
    case GET_WISHLIST:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export default wishlistReducer;
