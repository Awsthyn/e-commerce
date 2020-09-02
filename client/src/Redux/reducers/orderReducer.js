import { GET_ALL_ORDERS_USERS, GET_ORDERS, GET_ORDERS_BY_USER } from '../actions/constants';

const initialState = {
    orders: [],
};

export default function orderReduces(state = initialState, action) {

    switch (action.type) {
        case GET_ALL_ORDERS_USERS:
            return {
                ...state,
                orders: action.payload
            }
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default: return { ...state }
    }
}
