import axios from 'axios';

export const SET_CART = "SET_CART";
export const RESET_CART = "RESET_CART";

export const addToCart = ({ id, name, image, price, stock }, qty) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  let exist = false;
  for (let each of inLocal) {
    if (each.id === id) {
      exist = true;
      each.qty++
    }
  }
  if (!exist) inLocal.push({ id, name, image, price, stock, qty })
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal)) //guest
  const { data } = await axios.post('/cart/add', { email: 'test@gmail.com', cartGuest: inLocal }) //hardcore x1000000000 hahahaha
}

export const adjustQuantity = ({ id }, value) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  for (let each of inLocal) {
    if (each.id === id) {
      each.qty += value
    }
  }
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
  const { data } = await axios.post('/cart/add', { email: 'test@gmail.com', cartGuest: inLocal }) //hardcore x1000000000 hahahaha
}

export const removeFromCart = ({ id }) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart')).filter((each) => each.id !== id);
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
  const { data } = await axios.post('/cart/add', { email: 'test@gmail.com', cartGuest: inLocal }) //hardcore x1000000000 hahahaha
}

export const resetCart = () => async (dispatch) => {
  localStorage.setItem("cart", JSON.stringify([]));
  dispatch({ type: RESET_CART })
  window.location.replace('http://localhost:3000/products')
  const { data } = await axios.post('/cart/add', { email: 'test@gmail.com', cartGuest: [] }) //hardcore x1000000000 hahahaha
}

export const goToCheckout = () => async (dispatch) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart"))
  console.log(productsInCart)
  const { data } = await axios.post('/checkout', { productsInCart })
  console.log(data)
  window.location = data.init_point

}
