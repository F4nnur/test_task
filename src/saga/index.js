import {all} from "redux-saga/effects";
import {postsWatcher} from "./PostsSaga";


export function* rootWatcher() {
    yield all([postsWatcher()])
}