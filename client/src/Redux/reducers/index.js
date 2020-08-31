import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoriesReducer from './categoriesReducer'
import userReducer from "./userReducer"
import orderReducer from "./orderReducer"
import cartReducer from './cartReducer';
import sessionReducer from './sessionReducer';


export default combineReducers({
    products: productReducer,
    categories: categoriesReducer,
    users: userReducer,
    orders: orderReducer,
    cart: cartReducer,
    session: sessionReducer
    });

