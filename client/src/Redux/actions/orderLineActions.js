import { ADD_PRODUCT_TO_CART, DELETE_PROD_FROM_CART, EDIT_QUANTITY_FROM_CART } from '../actions/constants';

export function addToOrder(productId, quantity) {
	const url = 'http://localhost:3001/users/1/cart';
	return function (dispatch) {
		return fetch(url, {
			method: 'POST',
			body: JSON.stringify({ productId, quantity }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log("fetch add")
				dispatch({
					type: ADD_PRODUCT_TO_CART,
					payload: res,
				});
			})
			.catch((err) => console.error(err));
	}    
}

export function deleteProductFromCart(productId) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/orderLine/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((data)=>{
			console.log(productId)
            dispatch({type: DELETE_PROD_FROM_CART, payload: productId})
        })
        .catch(err => console.log(err))
    }
}

export function editQuantity(orderLine, quantity){
	return function(dispatch) {
		dispatch({type: EDIT_QUANTITY_FROM_CART, payload: [orderLine, quantity]})
		return fetch(`http://localhost:3001/users/1/cart`, {
			method: 'PUT',
			body: JSON.stringify({id: orderLine, quantity}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			
		}).catch(err => console.error(err))
	}
}
