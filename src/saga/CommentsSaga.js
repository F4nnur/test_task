import {put, call, takeEvery} from "redux-saga/effects"
import {
    fetchCommentsFailure,
    fetchCommentsSuccess,
} from "../store/actions/comments/comments.actions";
import {getCommentApi} from "../api/posts/comments.requests";
import {CommentsActionTypes} from "../constants/actions";


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* commentsWorker (action) {
    const postId  = action.postId
    try {
        yield delay(500)
        const data = yield call(getCommentApi, postId)
        yield put(fetchCommentsSuccess(postId, data.data))
    } catch (error) {
        yield put(fetchCommentsFailure('Произошла ошибка'))
    }

}

export function* commentsWatcher(){
    yield takeEvery(CommentsActionTypes.FETCH_COMMENTS_REQUEST, commentsWorker)
}