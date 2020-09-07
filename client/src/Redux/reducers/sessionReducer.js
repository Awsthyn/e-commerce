import { LOGIN, LOGOUT, GET_FORGOTTEN_USER, PURCHASED_PRODUCTS } from "../actions/constants";

const initialState = {
    sessionUser: {},
    forgottenUser: {},
    productsPurchased: []
};

export default function sessionReducer (state = initialState, action) {
    switch (action.type) {
    
    case LOGIN:
        delete action.payload.password;
        delete action.payload.securityAnswer;
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
            forgottenUser: action.payload
        }

    case PURCHASED_PRODUCTS:
        return {
        ...state,
        productsPurchased: action.payload
        }      

    default:
        return state
    }
}