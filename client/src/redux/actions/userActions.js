import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'USERS_LOGOUT';
export const GET_USERS = 'GET_USERS';
export const ADMINS = 'ADMINS';
export const BLOCKED = 'BLOCKED';
export const ERROR = 'ERROR';

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
    if(user === 'empty'){
      dispatch({type: ERROR, payload: ''})
    } else {
    const { data } = (await axios.post('/auth/login', user)).data;
    console.log(data)
    if (data) {
      if (data.user.blocked) {
        dispatch({type: BLOCKED, payload: 'USUARIO BLOQUEADO'})
      } else {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('user', data.user.email);
        localStorage.setItem('id', data.user.id)
        dispatch({ type: LOGIN_REQUEST, payload: user.email });
        if (!data.user.isadmin && !data.user.passwordReset) window.location.replace('http://localhost:3000/users/me');
        if (!data.user.isadmin && data.user.passwordReset) window.location.replace('http://localhost:3000/users/password-reset');
        if (data.user.isadmin) window.location.replace('http://localhost:3000/admin/dashboard')
      }
    } else {
      dispatch({type: ERROR, payload: 'USUARIO Y/O CONTRACEÑA INCORRECTOS'})
    }
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
    localStorage.setItem('cart', JSON.stringify([]));
    const res = await axios.get('auth/logout')
    console.log(res)
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    dispatch({ type: LOGOUT });
    window.location.replace('/')
  } catch (error) {
    console.log(error)
  }
}

export const passwordReset = (password) => async (dispatch) => {
  const id = localStorage.getItem('id')
  try {
    const { data } = (await axios.put(`/users/${id}`, { password: password.password_1, passwordReset: false })).data
    if (data.id) {
      window.location.replace('http://localhost:3000/users/me');
      dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    }
  } catch (error) {
    console.log(error)
  }
}
export const getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get('/users')
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
  const { data } = await axios.put(`/users/${id}`, datos)
  dispatch({
    type: ADMINS,
    payload: data,
  });
}

export const setBlocks = (id, act) => async (dispatch) => {
  let datos = {}
  if (act) {
    datos = {
      "blocked": true
    }
  } else {
    datos = {
      "blocked": false
    }
  }
  const { data } = await axios.put(`/users/${id}`, datos)
  dispatch({
    type: ADMINS,
    payload: data,
  });
}

export const setReset = (id, act) => async (dispatch) => {
  let datos = {}
  if (act) {
    datos = {
      "passwordReset": true
    }
  } else {
    datos = {
      "passwordReset": false
    }
  }
  const { data } = await axios.put(`/users/${id}`, datos)
  dispatch({
    type: ADMINS,
    payload: data,
  });
}
