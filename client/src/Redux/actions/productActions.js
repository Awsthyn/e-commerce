import {GET_PRODUCTS, SET_DETAILS, DELETE_PRODUCT} from './constants';

//------------  PRODUCTOS BUSCADOS  -----------------------------------------------------------

export function getSearchedProducts(keyword) { 
    return function(dispatch) {
        return fetch(`http://localhost:3001/search?query=${keyword}`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch search');
            dispatch({ type: GET_PRODUCTS, payload: data})
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

//------------  PRODUCTOS DE X CATEGORIA  -----------------------------------------------------------

export function getCategoryProducts(category) { 
    return function(dispatch) {
        return fetch(`http://localhost:3001/categories/${category}`)
        .then(r => r.json())
        .then(data => {
            console.log('fetch productos xCateg')
            dispatch({type: GET_PRODUCTS, payload: data.products})
        })
        .catch(error => console.log(error))
    }
}

//------------ PRODUCTO EN DETALLE  -----------------------------------------------------------

export function toProductDetails(id) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/products/${id}`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch detalles', data);
            dispatch({type: SET_DETAILS, payload: data})
        })
        .catch((error) => {
            alert(error);
        });
    }
}

//------------ TODOS LOS PRODUCTOS  -----------------------------------------------------------

export function getAllProducts() { 
    return function(dispatch) {
        return fetch(`http://localhost:3001/products`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch all prods');
            dispatch({type: GET_PRODUCTS, payload: data})
        })
        .catch((error) => {console.log(error)})
    } 
}

//------------ ELIMINAR UN PRODUCTO --------------------------------------------------

export function onDeleteProduct(ProductId) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/products/${ProductId}`, {
            method: 'DELETE',
            body: JSON.stringify({ id : ProductId }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.info("fetch delete product")
            dispatch({type: DELETE_PRODUCT, payload: res})
            alert("El Producto se ha Eliminado correctamente")
            window.location = "/crud";
        })
        .catch(err => console.error(err))
    }
}


