import {CommentsActionTypes} from "../../../constants/actions";

const initialState = {
    comments: [],
    isLoading: true,
    error: null
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS_DATA:
            return {isLoading: true, error: null, posts: []}
        case CommentsActionTypes.FETCH_COMMENTS_DATA_ERROR:
            return {isLoading: true, error: null, posts: []}
        case CommentsActionTypes.FETCH_COMMENTS_DATA_SUCCESS:
            return {isLoading: false, error: null, comments: action.payload}
        default:
            return state
    }
};

export default commentsReducer;
