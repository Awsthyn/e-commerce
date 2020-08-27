import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./productReducer";
import categoriesReducer from './categoriesReducer'
import userReducer from "./userReducer"
import orderReducer from "./orderReducer"
import cartReducer from './cartReducer';
import sessionReducer from './sessionReducer';


export default combineReducers({
    counter: counterReducer,
    products: productReducer,
    categories: categoriesReducer,
    users: userReducer,
    orders: orderReducer,
    cart: cartReducer,
    session: sessionReducer
    });

