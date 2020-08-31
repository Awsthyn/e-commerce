import { LOGIN, LOGOUT, GET_FORGOTTEN_USER } from "../actions/constants";

const initialState = {
    sessionUser: {},
    forgottenUser: {}
};

export default function sessionReducer (state = initialState, action) {
    switch (action.type) {
    
    case LOGIN:
        console.log('LOGIN redux', action.payload);
        return {
            ...state,
            sessionUser: action.payload
        }

    case LOGOUT:
        console.log('LOGOUT redux');
        return {
            ...state,
            sessionUser: {}
        }

    case GET_FORGOTTEN_USER:
        console.log("GET_FORGOTTEN_USER")
        return {
            ...state,
            forgottenUser: action.payload[0]
        }

    default:
        return state
    }
}