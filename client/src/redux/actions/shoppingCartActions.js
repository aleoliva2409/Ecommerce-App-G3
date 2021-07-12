export const ADD_PRODUCT = "ADD_PRODUCT";

export const addToCart = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
