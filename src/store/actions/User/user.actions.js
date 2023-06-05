import {UserActionTypes} from "../../../constants/actions";

export const fetchUserData = () => ({type: UserActionTypes.FETCH_USER_DATA})
export const fetchUserDataSuccess = (data) => ({type: UserActionTypes.FETCH_USER_DATA_SUCCESS, data})
export const fetchUserDataError = (error) => ({type: UserActionTypes.FETCH_USER_DATA_ERROR, error})
export const asyncFetchUserData = (id) => ({type:UserActionTypes.ASYNC_FETCH_USER_DATA, id})

export const fetchUserPosts = () => ({type: UserActionTypes.FETCH_USER_POSTS})
export const fetchUserPostsSuccess = (data) => ({type: UserActionTypes.FETCH_USER_POSTS_SUCCESS, data})
export const fetchUserPostsError = (error) => ({type: UserActionTypes.FETCH_USER_POSTS_ERROR, error})
export const asyncFetchUserPosts = (id) => ({type:UserActionTypes.ASYNC_FETCH_USER_POSTS, id})