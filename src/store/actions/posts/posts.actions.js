import {PostsActionsTypes} from "../../../constants/actions";

export const setPostsSuccess = (payload) => ({type: PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS, payload});
export const setPostsError = (payload) => ({type: PostsActionsTypes.FETCH_POSTS_DATA_ERROR, payload});
export const setPosts = () => ({type: PostsActionsTypes.FETCH_POSTS_DATA});
export const asyncSetPosts = () => ({type: PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS})