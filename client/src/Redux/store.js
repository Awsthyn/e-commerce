import rootReducer from "./reducers/index"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
//-- persist --
//import localStorage from 'redux-persist/lib/storage'
// import { AsyncStorage } from 'react-native';
//import {persistStore, persistReducer} from "redux-persist"

//-- persist --
//const persistConfig = {
//    key: 'root',
//    storage: localStorage
//}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//-- persist --
//const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    rootReducer, // --->>  persistedReducer
    composeEnhancers(
        applyMiddleware(thunk)
    )
);


//-- persist --
//export const persistor = persistStore(store)

