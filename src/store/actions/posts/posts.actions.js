import {PostsActionsTypes} from "../../../constants/actions";

export const setPosts = payload => ({type: PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS, payload});
export const asyncSetPosts = () => ({type: PostsActionsTypes.ASYNC_FETCH_POSTS_DATA_SUCCESS})