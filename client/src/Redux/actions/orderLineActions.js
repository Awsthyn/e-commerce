import { ADD_PRODUCT_TO_CART, GET_PRODUCTS_CART } from "../actions/constants";


  export function addToOrder(id){
    const url = 'http://localhost:3001/users/1/cart';
    return function(dispatch)
    {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({productId: id, quantity: 1, price: 1}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info(res)
            dispatch({type: ADD_PRODUCT_TO_CART, payload: {productId: id, quantity: 1, price: 1}})
        }).catch(err => console.error(err))
    }
}
