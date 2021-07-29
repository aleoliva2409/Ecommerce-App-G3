import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_WISHLIST = "GET_WISHLIST";

export const addFavorite = ({ id }) => async (dispatch) => {
  let inLocal = localStorage.getItem("user");
  if (inLocal) {
    const { data } = await axios.post("/wishlist/add/", { email: inLocal, idProd: id });
    dispatch({
      type: ADD_FAVORITE,
      payload: { id, message: data.message }
    })

  }
}

export const deleteFavorite = ({ id }) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem("user"));
  if (inLocal) {
    const { data } = await axios.put("/wishlist/remove", { email: inLocal, id });
    if (inLocal.mail.includes("@")) {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: { id, message: data.message }
      })
    }
  }
}

export const getWishlist = () => async (dispatch) => {
  let inLocal = localStorage.getItem("user");
  let { data } = await axios.get(`/wishlist/${inLocal}`)
  if (inLocal) {
    dispatch({
      type: GET_WISHLIST,
      payload: { products: data.products }
    })
  }
}
