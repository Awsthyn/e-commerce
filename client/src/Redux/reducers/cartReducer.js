import {ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART, DELETE_CART } from '../actions/constants';

const initialState = {
    cart: [],
};

export default function orderReducer (state = initialState, action) {
    switch(action.type) {
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
        case DELETE_CART:
          return {
            ...state,
            cart: []
          };
        default: return {...state}
    }
  }