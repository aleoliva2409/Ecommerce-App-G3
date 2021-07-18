import axios from "axios";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const GET_ORDER = "GET_ORDER";

export const getOrders = () => async (dispatch) => {
  try{
    const { data } = await axios.get('/orders')
    dispatch({
      type: GET_ALL_ORDERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export const getOrder = (id) => async (dispatch) => {
  try{
    const {data} = await axios.get(`/orders/${id}`);
    dispatch({
      type: GET_ORDER,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const updateOrder = (id, update) => async (dispatch) => {
  try{
    const {data} = await axios.put(`/orders/${id}`,update);
    dispatch({
      type: UPDATE_ORDER,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}
