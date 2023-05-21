import {all} from "redux-saga/effects";
import {postsWatcher} from "./PostsSaga";
import {commentsWatcher} from "./CommentsSaga";


export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher()])
}