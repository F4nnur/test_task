import {PostsActionsTypes} from "../../../constants/actions";

export interface PostsState {
    posts: any[]
    isLoading: boolean
    error: null | string
}

export interface FetchPostsAction {
    type: PostsActionsTypes.FETCH_POSTS_DATA
}

export interface FetchPostsSuccessAction {
    type: PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS
    payload: any[]
}

export interface FetchPostsErrorAction {
    type: PostsActionsTypes.FETCH_POSTS_DATA_ERROR
    payload: string
}

export type PostsAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction
