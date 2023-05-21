import {put, call, takeEvery} from "redux-saga/effects"
import {setPosts, setPostsError, setPostsSuccess} from "../store/actions/posts/posts.actions";
import {getPostsAPI} from "../api/posts/posts.requests";
import {ApiUrls} from "../constants/urls";
import {PostsActionsTypes} from "../constants/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* postsWorker () {
    try {
        yield delay(500)
        yield put(setPosts())
        const data = yield call(getPostsAPI)
        yield put(setPostsSuccess(data.data))
    } catch (error) {
        yield put(setPostsError('Произошла ошибка'))
    }

}

export function* postsWatcher(){
    yield takeEvery(PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS, postsWorker)
}