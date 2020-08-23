import {ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART, DELETE_CART, DELETE_PROD_FROM_CART } from '../actions/constants';

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
        case DELETE_PROD_FROM_CART: {
          console.log(state.cart.filter((p) => p.id !== action.payload))
          return {
            ...state,
            cart: state.cart.filter((p) => p.id !== action.payload)
          }
        }
        default: return {...state}
    }
  }
