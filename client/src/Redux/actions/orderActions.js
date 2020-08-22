import { GET_ALL_ORDERS_USERS, GET_PRODUCTS_CART } from './constants';

export function getAllOrders() {
    return function(dispatch){
        return fetch(`http://localhost:3001/order/all/users`)
        .then((r) => r.json())
        .then((data) => dispatch({type: GET_ALL_ORDERS_USERS, payload: data}))
        .catch((error) => {console.log(error)})
    }
}


//-----------------------Editar Estado de Order------------------------
export function editOrder(order){
    return function(dispatch){
        return fetch(`http://localhost:3001/order/${order.id}`,{
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => dispatch(getAllOrders()) )
    }
}

export function getCart(){
    return function (dispatch) {
        return fetch(`http://localhost:3001/users/1/cart`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch get cart');
            dispatch({ type: GET_PRODUCTS_CART, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

