import {put, call, takeEvery} from "redux-saga/effects"
import {
    asyncSearchPosts,
    asyncSortPosts,
    setCurrentPage,
    setPosts,
    setPostsError,
    setPostsSuccess,
} from "../store/actions/posts/posts.actions";
import {getPostsAPI} from "../api/posts/posts.requests";
import {PostsActionsTypes} from "../constants/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* postsWorker(action) {
    const limit = action.payload.limit
    const page = action.payload.page
    try {
        yield delay(500)
        yield put(setPosts())
        const data = yield call(getPostsAPI, limit, page)
        yield put(setPostsSuccess(data.data, data.headers['x-total-count']))
    } catch (error) {
        yield put(setPostsError('Произошла ошибка'))
    }
}

function* setPageWorker(action) {
    const page = action.page
    yield put(setCurrentPage(page))
}

function* sortPostsWorker() {
    yield put(asyncSortPosts())
}

function* searchPostWorker(action) {
    const value = action.payload.value
    const posts = action.payload.posts
    yield put(asyncSearchPosts(value, posts))
}

export function* postsWatcher() {
    yield takeEvery(PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS, postsWorker)
    yield takeEvery(PostsActionsTypes.ASYNC_SET_CURRENT_PAGE, setPageWorker)
    yield takeEvery(PostsActionsTypes.SORT_POSTS, sortPostsWorker)
    yield takeEvery(PostsActionsTypes.SEARCH_POSTS, searchPostWorker)
}