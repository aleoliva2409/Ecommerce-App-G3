import { LOGIN_REQUEST, GET_USERS, ADMINS, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './../actions/userActions';

let user = localStorage.getItem('user');
const initialState = user ? {
    loggedIn: true,
    user,
    allUsers: [],
    loging: false
} : {};

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
        case GET_USERS:
            return {
                ...state,
                allUsers: action.payload,
                loging: false
            };
        case ADMINS:
            return {
                ...state,
                loging: true
            };
        default:
            return state
    }
}
export default login;
