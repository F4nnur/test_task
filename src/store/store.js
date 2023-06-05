import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "./reducers/posts/posts.reducer";
import commentsReducer from "./reducers/comments/comments.reducer";
import {rootWatcher} from "../saga";
import userInfoReducer from "./reducers/User/Info/userInfo.reducer";
import userPostsReducer from "./reducers/User/Posts/userPosts.reducer";


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    postsReducer,
    commentsReducer,
    userInfoReducer,
    userPostsReducer
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
window.store = store

sagaMiddleware.run(rootWatcher)
