import {UserActionTypes} from "../../../constants/actions";

export const fetchUserData = () => ({type: UserActionTypes.FETCH_USER_DATA})
export const fetchUserDataSuccess = (data) => ({type: UserActionTypes.FETCH_USER_DATA_SUCCESS, data})
export const fetchUserDataError = (error) => ({type: UserActionTypes.FETCH_USER_DATA_ERROR, error})
export const asyncFetchUserData = (id) => ({type:UserActionTypes.ASYNC_FETCH_USER_DATA, id})