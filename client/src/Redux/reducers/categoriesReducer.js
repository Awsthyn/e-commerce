import { GET_ALL_CATEGORIES, DELETE_CATEGORY } from '../actions/constants';

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
    categories: [],
};


export default function categoriesReduces (state = initialState, action) {
    switch(action.type) {

        case GET_ALL_CATEGORIES:  
            return {
                ...state,
                categories: action.payload
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