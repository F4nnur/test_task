import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
