import {PostsActionsTypes} from "../../../constants/actions";

export const setPostsSuccess = (data, x_total_count) => ({type: PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS, payload: {data, x_total_count}});
export const setPostsError = (payload) => ({type: PostsActionsTypes.FETCH_POSTS_DATA_ERROR, payload});
export const setPosts = () => ({type: PostsActionsTypes.FETCH_POSTS_DATA});
export const asyncSetPosts = (limit, page) => ({type: PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS, payload: {limit, page}})

export const setCurrentPage = (page) => ({type:PostsActionsTypes.SET_CURRENT_PAGE, page})
export const asyncSetCurrentPage = (page) => ({type:PostsActionsTypes.ASYNC_SET_CURRENT_PAGE, page})

export const sortPosts = () => ({type:PostsActionsTypes.SORT_POSTS})
export const asyncSortPosts = () => ({type:PostsActionsTypes.SORT_POSTS_SUCCESS})

export const searchPosts = (value) => ({type: PostsActionsTypes.SEARCH_POSTS, value})
export const asyncSearchPosts = (value) => ({type: PostsActionsTypes.SEARCH_POSTS_SUCCESS, value})