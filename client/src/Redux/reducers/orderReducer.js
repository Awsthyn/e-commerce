import { GET_ALL_ORDERS_USERS, ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from '../actions/constants';

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
        case GET_PRODUCTS_CART:
         return {
        ...state,
        cart: action.payload,
      };
        case ADD_PRODUCT_TO_CART:
      let array = [...state.cart, action.payload];
          return {
        ...state,
        cart: array,
      };
        default: return {...state}
    }
}
