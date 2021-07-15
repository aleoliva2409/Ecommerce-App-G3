export const SET_CART = "SET_CART";
export const RESET_CART = "RESET_CART"

export const addToCart = ({id,name,image,price,stock},qty) => (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  let exist = false;
  for(let each of inLocal){
    if(each.id === id){
      exist = true;
      each.qty++
    }
  }
  if (!exist) inLocal.push({ id,name,image,price,stock,qty })
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal)) //guest
}

export const adjustQuantity = ({ id }, value) => (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart'));
  for(let each of inLocal){
    if(each.id === id){
      each.qty += value
    }
  }
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
}

export const removeFromCart = ({id}) => (dispatch) => {
  let inLocal = JSON.parse(localStorage.getItem('cart')).filter((each)=>each.id!==id);
  dispatch({ type: SET_CART, payload: inLocal })
  localStorage.setItem('cart', JSON.stringify(inLocal))
}


export const resetCart = () => (dispatch) => {
  console.log('action')
  localStorage.setItem("cart", JSON.stringify([]));
  dispatch({ type: RESET_CART })
  window.location.replace('http://localhost:3000/products') 
}
