import {call, put, takeEvery} from "redux-saga/effects";
import {UserActionTypes} from "../constants/actions";
import {getUserAPI} from "../api/user/user.requests";
import {fetchUserData, fetchUserDataError, fetchUserDataSuccess} from "../store/actions/User/user.actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* userWorker(action) {
    const id = action.id
    console.log(id)
    try {
        yield delay(500)
        yield put(fetchUserData())
        const data = yield call(getUserAPI, id)
        yield put(fetchUserDataSuccess(data.data))
    } catch (error) {
        yield put(fetchUserDataError('Произошла ошибка'))
    }
}

export function* userWatcher() {
    yield takeEvery(UserActionTypes.ASYNC_FETCH_USER_DATA, userWorker)
}