import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'USERS_LOGOUT';
export const GET_USERS = 'GET_USERS';
export const ADMINS = 'ADMINS';

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
      dispatch({ type: LOGIN_REQUEST, payload: user.email });
      if(!data.user.isadmin) window.location.replace('http://localhost:3000/users/me');
      else window.location.replace('http://localhost:3000/admin/dashboard')
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
    window.location.replace('http://localhost:3000/users/me');
  } catch (error) {
    console.log(error)
  }
}

export const getUser = (token) => async (dispatch) => {
  try {
    const { user } = (await axios.get('/users/me', { headers: { Authorization: `Bearer ${token}` } })).data;
    dispatch({ type: LOGIN_SUCCESS, payload: user })
  } catch (error) {
    console.log(error)
  }
}

export const logout = () => async (dispatch) => {
  try {
    const res = await axios.get('auth/logout')
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error)
  }
}

export const getAllUsers = () => async (dispatch) => {
  const {data} = await axios.get('/users')
  console.log(data)
  dispatch({
    type: GET_USERS,
    payload: data
  });
}
  
export const selectAdmins = (id, act) => async (dispatch) => {
    let datos = {}
    if (act) {
      datos = {
        "isadmin": true
      }
    } else {
      datos = {
        "isadmin": false
      }
    }
    const { data } = await axios.put (`/users/${id}`, datos)
    // const res = await fetch("http://localhost:3001/user/changeAdmin", {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(datos),
    // });
  
    dispatch({
      type: ADMINS,
      payload: data,
    });
  }

