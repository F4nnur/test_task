import {PostsActionsTypes} from "../../../constants/actions";

const initialState = {
    posts: [],
    isLoading: true,
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostsActionsTypes.FETCH_POSTS_DATA:
            return {isLoading: true, error: null, posts: []}
        case PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS:
            return {isLoading: false, error: null, posts: action.payload}
        case PostsActionsTypes.FETCH_POSTS_DATA_ERROR:
            return {isLoading: true, error: action.payload, posts: []}
        default:
            return state
    }
};

export default postsReducer;

