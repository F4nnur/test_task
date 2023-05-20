import {put, call, takeEvery} from "redux-saga/effects"
import {appAxiosInstance} from "../api/api";
import {ApiUrls} from "../constants/urls";
import {setPosts} from "../store/actions/posts/posts.actions";
import {PostsActionsTypes} from "../constants/actions";


export const getPostsAPI = async () => {
    const { data } = await appAxiosInstance.get(ApiUrls.posts)
    console.log(data)
    return data
}

function* postsWorker () {
    const data = yield call(getPostsAPI)
    const json = yield call(() => new Promise(resolve => resolve(data.json())))
    yield put(setPosts(json))
}

export function* postsWatcher(){
    yield takeEvery(PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS, postsWorker)
}