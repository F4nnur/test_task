import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./reducers/posts/posts.reducer";
import {rootWatcher} from "../saga";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    postsReducer,

});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)
