import {CommentsActionTypes} from "../../../constants/actions";

const initialState = {
    comments: [],
    isLoading: true,
    error: null,
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.payload.postId]: action.payload.comments,
                },
                isLoading: false,
                error: null,
            };
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default commentsReducer;
