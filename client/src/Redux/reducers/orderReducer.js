import { GET_ALL_ORDERS_USERS } from '../actions/constants';

const initialState = {
    orders: [],
};

export default function orderReduces (state = initialState, action) {
    
    switch(action.type) {

        case GET_ALL_ORDERS_USERS:
            return {
                ...state,
                orders: action.payload
            }

        default: return {...state}
    }

}
