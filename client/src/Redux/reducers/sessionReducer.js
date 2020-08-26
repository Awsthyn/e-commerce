import { LOGIN, LOGOUT } from "../actions/constants";

const initialState = {
    sessionUser: {}
};

export default function sessionReducer (state = initialState, action) {
    switch (action.type) {
    
    case LOGIN:
        console.log('LOGIN redux');
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

    default:
        return state
    }
}