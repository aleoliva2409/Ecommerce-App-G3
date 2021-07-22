import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'USERS_LOGOUT';



export const userActions = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/login/${user}`);
    dispatch({
      type: LOGIN_REQUEST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}

export const login = (user) => async (dispatch) => {
  try {
    const { data } = (await axios.post('/auth/login', user)).data;
    if (data) {
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', data.user.email);
      dispatch({ type: LOGIN_REQUEST, payload: user.email })
    }
  } catch (error) {
    console.log(error)
  }
}

export const signup = (user) => async (dispatch) => {
  try {
    const { data } = (await axios.post('/users', user)).data;
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('user', data.user.email);
    dispatch({ type: LOGIN_REQUEST, payload: user.email })
  } catch (error) {
    console.log(error)
  }
}


