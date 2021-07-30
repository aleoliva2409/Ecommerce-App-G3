import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_WISHLIST = "GET_WISHLIST";

export const addFavorite = ({ id }, email) => async (dispatch) => {
  const { data } = await axios.post("/wishlist/add/", { email, idProd: id });
  dispatch({
    type: ADD_FAVORITE,
    payload: { id, message: data.message }
  })
}

export const deleteFavorite = ({ id }, email) => async (dispatch) => {
  const { data } = await axios.put("/wishlist/remove", { email, id });
  dispatch({
    type: REMOVE_FAVORITE,
    payload: { id, message: data.message }
  })
}

export const getWishlist = (email) => async (dispatch) => {
  const { data } = await axios.get(`/wishlist/${email}`)
    dispatch({
      type: GET_WISHLIST,
      payload: data
    })
}
