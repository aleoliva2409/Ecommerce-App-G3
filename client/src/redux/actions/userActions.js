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


// export const login = (email, password) => async (dispatch) => {
//   try {
//       dispatch(request({ email }));

//       userService.login(email, password)
//           .then(
//               user => {
//                   dispatch(success(user));
//                   history.push('/');
//               },
//               error => {
//                   dispatch(failure(error));
//                   dispatch(alertActions.error(error));
//               }
//           );
//   };

//   function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
//   function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
//   function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
// }

// export const userActions = {
//   login,

// };
