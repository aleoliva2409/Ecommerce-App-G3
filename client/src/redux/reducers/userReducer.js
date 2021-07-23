import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT } from './../actions/userActions';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : { };

export function login(state = initialState, action) {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
        loggingIn: true,
        user: action.payload
        };
    case LOGIN_SUCCESS:
        return {
        loggedIn: true,
        user: action.payload
        };
    case LOGIN_FAILURE:
        return {};
    case LOGOUT:
        return {};
    default:
        return state
    }
}
export default login;
