import {PostsAction, PostsState} from "./posts.types";
import {PostsActionsTypes} from "../../../constants/actions";


const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null
};

const postsReducer = (state = initialState, action:PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionsTypes.FETCH_POSTS_DATA:
            return {isLoading: true, error: null, posts: []}
        case PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS:
            return {isLoading: false, error: null, posts: action.payload}
        case PostsActionsTypes.FETCH_POSTS_DATA_ERROR:
            return {isLoading: false, error: action.payload, posts: []}
        default:
            return state
    }
};

export default postsReducer;

