import { ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from "../actions/constants";


// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
  cart: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_CART:             
    return {
      ...state,
      cart: action.payload
  } 
    case ADD_PRODUCT_TO_CART:
      let array = [...state.cart, action.payload]
      return {
        ...state,
        cart: array
      }
    default:
      return { ...state };
  }
}
