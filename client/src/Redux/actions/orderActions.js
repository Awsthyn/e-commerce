import { ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from "../actions/constants";

export function getCart(){
    return function (dispatch) {
        return fetch(`http://localhost:3001/users/1/cart`)
        .then((r) => r.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: GET_PRODUCTS_CART, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}