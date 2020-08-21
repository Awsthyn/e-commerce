import { combineReducers } from 'redux';
import counterReducer from "./counterReducer"
import productReducer from "./productReducer";
import categoriesReducer from './categoriesReducer'
import userReducer from "./userReducer"

export default combineReducers({
    counter: counterReducer,
    products: productReducer,
    categories: categoriesReducer,
    users: userReducer
    });
