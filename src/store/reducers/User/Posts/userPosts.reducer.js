import {UserActionTypes} from "../../../../constants/actions";

const InitialState = {
    posts: [],
    isLoading: true,
    error: null,
}

const userPostsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_POSTS:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.FETCH_USER_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.data,
                isLoading: false,
                error: null
            }
        case UserActionTypes.FETCH_USER_POSTS_ERROR:
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export default userPostsReducer;