import { LOGIN_REQUEST, GET_SHIPPING, GET_USERS, ADMINS, ERROR, LOGIN_SUCCESS, BLOCKED, LOGIN_FAILURE, LOGOUT } from './../actions/userActions';

let user = localStorage.getItem('user');
const initialState = {
    loggedIn: true,
    user,
    allUsers: [],
    loging: false,
    message: '',
    shippingData: {}
}
//: {};

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
        case BLOCKED:
            return {
                ...state,
                message: action.payload
            };
            case ERROR:
                return {
                    ...state,
                    message: action.payload
                };
                case GET_SHIPPING:
            return {
                ...state,
                shippingData: action.payload
            };
        default:
            return state
    }
}
export default login;
