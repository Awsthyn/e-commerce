import {GET_PRODUCTS, GET_ALL_CATEGORIES, SET_DETAILS, DELETE_PRODUCT, DELETE_CATEGORY} from './constants';

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
    products: [],
    productDetails: {},
    // searchedProducts: [], // Los productos que coinciden con "x" busqueda
    // categoryProducts: [],

    categories: [],
};

export default function rootReducer (state = initialState, action) {
    switch(action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case GET_ALL_CATEGORIES:  
            return {
                ...state,
                categories: action.payload
            }

        case SET_DETAILS:
            console.log('productDetails')
            return {
                ...state,
                productDetails: action.payload
            }

        case DELETE_PRODUCT:
            console.log('producto eliminado')
            return {
                ...state,
                products: state.products.filter((p) => p.id !== action.payload)
            }

        case DELETE_CATEGORY:
            console.log('categoria eliminada')
            return {
                ...state,
                categories: state.categories.filter((c) => c.id !== action.payload)
            }

        default: return {...state}
    }


}