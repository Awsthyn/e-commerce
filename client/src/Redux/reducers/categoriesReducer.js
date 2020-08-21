import { GET_ALL_CATEGORIES, DELETE_CATEGORY, EDIT_CATEGORY } from '../actions/constants';

// COMENTAR AL LADO PARA QUE SIRVE ESA PROPIEDAD DE ESTADO ↓↓↓↓↓↓

const initialState = {
    categories: [],
    category: '',
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

        case EDIT_CATEGORY:
            console.log('categoria editada')
            return {
                ...state,
                category: state.category
            }

        default: return {...state}
    }


}
