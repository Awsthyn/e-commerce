
import {GET_BY_CATEGORY, GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_CATEGORIES} from './constants'

export function toProductDetails(id) {
    return function(dispatch){
    fetch(`http://localhost:3001/products/${id}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({type: GET_PRODUCT_BY_ID, payload: data})
      })
      //console.log('prodsDetail:' + prodsDetail)
      .catch((error) => {
        console.error(error);
      });
    }
  }


export function getCategories() {
    return function(dispatch){
        fetch(`http://localhost:3001/categories`)
            .then((r) => r.json())
            .then((data) => {
                dispatch({type: GET_CATEGORIES, payload: data})
            });
    }
}

export function getProduct() {
    return function(dispatch){
    fetch(`http://localhost:3001/products`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        dispatch({type: GET_PRODUCTS, payload: data})
      });
  }
}

export function getCategory(value) {
    return function(dispatch){
    fetch(`http://localhost:3001/categories/${value}`)
      .then((r) => r.json())
      .then((data) => {
        dispatch({type: GET_BY_CATEGORY, payload: data})
        // if(!data) {alert(`No se encontraron productos en la categoría ${value}`)}
      });
  }
}