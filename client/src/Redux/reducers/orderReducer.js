import { ADD_PRODUCTS, DELETE_PRODUCT } from "../actions/constants";

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
  orderProducts: [],
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        orderProducts: state.orderProducts.concat(action.payload),
      };

    default:
      return { ...state };
  }
}
