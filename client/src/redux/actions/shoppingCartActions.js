export const ADD_PRODUCT = "ADD_PRODUCT";

export const addToCart = (product) => {
  return {
    type: ADD_PRODUCT,
    product
  }
}
