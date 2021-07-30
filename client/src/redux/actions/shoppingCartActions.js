import axios from "axios";

export const SET_CART = "SET_CART";
export const RESET_CART = "RESET_CART";

export const addToCart = ({ id, name, image, price, stock, size }, qty, user) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  let exist = false;
  for (let each of inLocal) {
    if (each.id === id) {
      exist = true;
      each.qty++
    }
  }
  if (!exist) inLocal.push({ id, name, image, price, stock, qty, size })
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal)) //guest
  await axios.post('/cart/add', { email: user, cartGuest: inLocal })
}

export const adjustQuantity = ({ id }, value,user) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  for (let each of inLocal) {
    if (each.id === id) {
      each.qty += value
    }
  }
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
  await axios.post('/cart/add', { email: user, cartGuest: inLocal })
}

export const removeFromCart = ({ id },user) => async (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart')).filter((each) => each.id !== id);
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
  await axios.post('/cart/add', { email: user, cartGuest: inLocal })
}

export const resetCart = (user) => async (dispatch) => {
  localStorage.setItem("cart", JSON.stringify([]));
  dispatch({ type: RESET_CART })
  window.location.replace('http://localhost:3000/products')
  await axios.post('/cart/add', { email: user, cartGuest: [] })
}

export const goToCheckout = () => async (dispatch) => {
  const productsInCart = JSON.parse(localStorage.getItem("cart"))
  const { data } = await axios.post('/checkout', { productsInCart })
  window.location = data.init_point
}

export const changeOrderStatus = (userId, status) => async (dispatch) => {
  const states = {
    'approved' : 'completed',
    'refected' : 'cancelled',
    null : 'cancelled',
    'pending' : 'pending'
  }
  const user = (localStorage.getItem('user'))
  const prods = JSON.parse(localStorage.getItem('cart'))
  console.log(prods)
  if(status === 'approved' || status === 'pending'){
    await axios.post ('/checkout/send', {user, prods})
    localStorage.setItem('cart',JSON.stringify([]))
  }
  await axios.put (`/orders/${userId}`, {orderState:states[status]})
  window.location.replace('/')
}