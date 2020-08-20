import { GET_PRODUCTS, SET_DETAILS, DELETE_PRODUCT } from '../actions/constants';

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
    products: [],
    productDetails: {},
};

export default function productReducer (state = initialState, action) {
    switch(action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
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

        default: return {...state}
    }


}