const FETCH_POSTS_DATA = 'SET_POSTS_DATA'
const FETCH_POSTS_DATA_ERROR = 'FETCH_POSTS_DATA_ERROR'
const FETCH_POSTS_DATA_SUCCESS = 'FETCH_POSTS_DATA_SUCCESS'
const ASYNC_FETCH_POSTS_DATA_SUCCESS = 'ASYNC_FETCH_POSTS_DATA_SUCCESS'

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_FAILURE';

const SORT_POSTS = 'SORT_POSTS';
const SORT_POSTS_SUCCESS = 'SORT_POSTS_SUCCESS';

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const ASYNC_SET_CURRENT_PAGE = 'ASYNC_SET_CURRENT_PAGE';

const SEARCH_POSTS = 'SEARCH_POSTS';
const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';

const FETCH_USER_DATA = 'FETCH_USER_DATA';
const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
const FETCH_USER_DATA_ERROR = 'FETCH_USER_DATA_ERROR';
const ASYNC_FETCH_USER_DATA = 'ASYNC_FETCH_USER_DATA';


export const PostsActionsTypes = {
    SEARCH_POSTS,
    SEARCH_POSTS_SUCCESS,
    FETCH_POSTS_DATA,
    FETCH_POSTS_DATA_ERROR,
    FETCH_POSTS_DATA_SUCCESS,
    ASYNC_FETCH_POSTS_DATA_SUCCESS,
    SORT_POSTS,
    SORT_POSTS_SUCCESS,
    SET_CURRENT_PAGE,
    ASYNC_SET_CURRENT_PAGE,
}
export const CommentsActionTypes = {
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_REQUEST
}

export const UserActionTypes = {
    FETCH_USER_DATA,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    ASYNC_FETCH_USER_DATA
}