import axios from "axios";

export const POST_REVIEW = "POST_REVIEW";

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
