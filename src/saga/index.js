import {all} from "redux-saga/effects";
import {postsWatcher} from "./PostsSaga";
import {commentsWatcher} from "./CommentsSaga";
import {userWatcher} from "./UserSaga";


export function* rootWatcher() {
    yield all([postsWatcher(), commentsWatcher(), userWatcher()])
}