import { ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from "../actions/constants";

export function addToOrder(name, price, quantity) {
  const url = "http://localhost:3001/users/1/cart";
  return function (dispatch) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({ name: name, price: price, quantity: quantity }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.info(res);
        dispatch({
          type: ADD_PRODUCT_TO_CART,
          payload: { name: name, price: price, quantity: quantity },
        });
      })
      .catch((err) => console.error(err));
  };
}
