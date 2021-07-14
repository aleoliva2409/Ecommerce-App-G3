export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QUANTITY = "ADJUST_QUANTITY"
export const RESET_CART = "RESET_CART"

export const addToCart = (product,qty) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      id: product.id
    }
  }
}

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: product.id
    }
  }
}

export const adjustQuantity = (product, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: product.id,
      quantity: value
    }
  }
}

export const resetCart = () => {
  return {
    type: RESET_CART,
  }
}
