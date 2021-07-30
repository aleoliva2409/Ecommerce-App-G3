import axios from "axios";

export const POST_REVIEW = "POST_REVIEW";
export const GET_REVIEWS = "GET_REVIEWS";

export const postReview = (idProduct,review) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/products/${idProduct}/reviews`, review);
    dispatch({
      type: POST_REVIEW,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllReview = (idProduct) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${idProduct}/reviews`);
    dispatch({
      type: GET_REVIEWS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
