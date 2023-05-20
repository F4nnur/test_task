import {put, call, takeEvery} from "redux-saga/effects"
import {setPosts} from "../store/actions/posts/posts.actions";
import {PostsActionsTypes} from "../constants/actions";
import {getPostsAPI} from "../api/posts/posts.requests";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* postsWorker () {
    yield delay(500)
    const data = yield call(getPostsAPI)
    yield put(setPosts(data.data))
}

export function* postsWatcher(){
    yield takeEvery(PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS, postsWorker)
}