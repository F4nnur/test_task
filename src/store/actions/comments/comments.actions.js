import {CommentsActionTypes} from "../../../constants/actions";

export const fetchCommentsRequest = (postId) => ({
    type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
    postId,
});

export const fetchCommentsSuccess = (postId, comments) => ({
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: { postId, comments },
});

export const fetchCommentsFailure = (error) => ({
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
    payload: error,
});