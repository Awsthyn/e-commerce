import { ADD_PRODUCT_TO_CART, DELETE_PROD_FROM_CART, EDIT_QUANTITY_FROM_CART, GET_PRODUCTS_CART, DELETE_CART } from '../actions/constants';
import {getAllOrders} from './orderActions'
//-----------------------Obtener productos del carrito------------------------
export function getCart(userId){
    return function (dispatch) {
        return fetch(`http://localhost:3001/users/${userId}/cart`, {
            credentials: 'include' 
        })
        .then((r) => r.json())
        .then((data) => {
            dispatch({ type: GET_PRODUCTS_CART, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

//----------------------- Vaciar carrito ------------------------

export function emptyCart(userId) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/users/${userId}/cart`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .then(res => res.json())
        .then(()=>{
            dispatch({type: DELETE_CART})
        })
        .catch(err => console.log(err))
    }
}



//----------------------- Agregar producto al carrito -----------------------

export function addToOrder(productId, quantity, userId) {
	const url = `http://localhost:3001/users/${userId}/cart`;
	return function (dispatch) {
		return fetch(url, {
			method: 'POST',
			body: JSON.stringify({ productId, quantity }),
			headers: {
				'Content-Type': 'application/json',
            },
            credentials: 'include' 
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res)
				dispatch({
					type: ADD_PRODUCT_TO_CART,
					payload: res,
				});
			})
			.catch((err) => console.error(err));
	}    
}

//----------------------- Eliminar producto de carrito ------------------------

export function deleteProductFromCart(productId) {
    return function(dispatch) {
		dispatch({type: DELETE_PROD_FROM_CART, payload: productId})
        return fetch(`http://localhost:3001/orderLine/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .then((data)=>{
			console.log(productId)
            
        })
        .catch(err => console.log(err))
    }
}

//-----------------------Editar cantidad de un producto de carrito ------------------------

export function editQuantity(orderLine, quantity, userId){
	return function(dispatch) {
		dispatch({type: EDIT_QUANTITY_FROM_CART, payload: [orderLine, quantity]})
		return fetch(`http://localhost:3001/users/${userId}/cart`, {
			method: 'PUT',
			body: JSON.stringify({id: orderLine, quantity}),
			headers: {
				'Content-Type': 'application/json'
            },
            credentials: 'include' 
        })
        .catch(err => console.error(err))
	}
}


//-----------------------Confirmar compra ------------------------

export function confirmCart(total, userId){
    return function(dispatch){
        return fetch(`http://localhost:3001/users/${userId}/cart/completo`,{
            method: 'PUT',
            body: JSON.stringify({total}),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' 
        }).then(() => dispatch(getAllOrders()) )
    }
}
