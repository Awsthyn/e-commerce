import { ADD_PRODUCTS, DELETE_PRODUCT } from "../actions/constants";

export function addToOrder(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({ type: ADD_PRODUCTS, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
