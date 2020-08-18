import {GET_SEARCHED_PRODUCTS} from './constants';

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
    searchedProducts: [], // Los productos que coinciden con "x" busqueda
};

export default function rootReducer (state = initialState, action) {
    switch(action) {

        case GET_SEARCHED_PRODUCTS:
            return {
                ...state,
                searchedProducts: action.payload
            } 

    }


}