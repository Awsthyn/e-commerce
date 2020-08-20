import {GET_PRODUCTS, GET_ALL_CATEGORIES, SET_DETAILS, DELETE_PRODUCT, DELETE_CATEGORY} from './constants';

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
            console.log('fetch xCateg')
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

//------------ ELIMINAR UN PRODUCTO (TODAVIA NO LO ELIMINA) --------------------------------------------------

export function onDeleteProduct(id) {
    console.log('eliminado')
    return {type: DELETE_PRODUCT, payload: id}
}

//------------  CATEGORIAS  -----------------------------------------------------------

export function getAllCategories() {
    return function(dispatch){
        return fetch(`http://localhost:3001/categories`)
        .then((r) => r.json())
        .then((data) => {
            console.log('fetch categ')
            dispatch({type: GET_ALL_CATEGORIES, payload: data})
        })
        .catch((error) => {console.log(error)})
    }
}

//------------ ELIMINA UNA CATEGORIA (TODAVIA NO LA ELIMINA)  -----------------------------------------------------------

export function onDeleteCategory(id) {
    console.log('eliminado')
    return {type: DELETE_CATEGORY, payload: id}
}