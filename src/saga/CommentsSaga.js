import {put, call, takeEvery} from "redux-saga/effects"
import {
    setComments,
    setCommentsError,
    setCommentsSuccess,
} from "../store/actions/comments/comments.actions";
import {getCommentApi} from "../api/posts/comments.requests";
import {CommentsActionTypes} from "../constants/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* commentsWorker (action) {
    console.log(action)
    try {
        yield delay(500)
        yield put(setComments())
        const data = yield call(getCommentApi, action.id)
        yield put(setCommentsSuccess(data.data))
    } catch (error) {
        console.log(error)
        yield put(setCommentsError('Произошла ошибка'))
    }

}

export function* commentsWatcher(){
    yield takeEvery(CommentsActionTypes.ASYNC_FETCH_COMMENTS_DATA_SUCCESS, commentsWorker)
}