import {CommentsActionTypes} from "../../../constants/actions";

export const setCommentsSuccess = (payload) => ({type: CommentsActionTypes.FETCH_COMMENTS_DATA_SUCCESS, payload});
export const setCommentsError = (payload) => ({type: CommentsActionTypes.FETCH_COMMENTS_DATA_ERROR, payload});
export const setComments = () => ({type: CommentsActionTypes.FETCH_COMMENTS_DATA});
export const asyncSetComments = (id) => ({type: CommentsActionTypes.ASYNC_FETCH_COMMENTS_DATA_SUCCESS, id});