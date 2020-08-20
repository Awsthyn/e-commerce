import { combineReducers } from 'redux';
import counterReducer from "./counterReducer"
import productReducer from "./productReducer";
import categoriesReducer from './categoriesReducer'

export default combineReducers({
    counter: counterReducer,
    products: productReducer,
    categories: categoriesReducer
    });