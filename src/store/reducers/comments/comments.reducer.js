import {PostsActionsTypes} from "../../../constants/actions";

const initialState = {
    comments: [],
    isLoading: true,
    error: null
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS:
            return {isLoading: false, error: null, posts: action.payload}
        default:
            return state
    }
};

export default commentsReducer;
