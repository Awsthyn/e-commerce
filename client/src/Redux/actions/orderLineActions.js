import { ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from "../actions/constants";

export function addToOrder(id) {
    return function (dispatch) {
      return fetch(`http://localhost:3001/products/${id}`)
        .then((r) => r.json())
        .then((data) => {
          dispatch({ type: ADD_PRODUCT_TO_CART, payload: data });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
  