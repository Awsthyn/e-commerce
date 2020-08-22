import { combineReducers } from 'redux';
import counterReducer from "./counterReducer"
import productReducer from "./productReducer";
import categoriesReducer from './categoriesReducer'
import userReducer from "./userReducer"
import orderReducer from "./orderReducer"

export default combineReducers({
    counter: counterReducer,
    products: productReducer,
    categories: categoriesReducer,
    users: userReducer,
    orders: orderReducer
    });
