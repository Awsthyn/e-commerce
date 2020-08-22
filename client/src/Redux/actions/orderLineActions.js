import { ADD_PRODUCT_TO_CART } from '../actions/constants';

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
				console.log(res);
				dispatch({
					type: ADD_PRODUCT_TO_CART,
					payload: res,
				});
			})
			.catch((err) => console.error(err));
	};
}
