import {PostsActionsTypes} from "../../../constants/actions";

const initialState = {
    posts: [],
    isLoading: true,
    error: null,
    currentPage: 1,
    perpPage: 10,
    x_total_count: 0
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostsActionsTypes.FETCH_POSTS_DATA:
            return {
                ...state,
                x_total_count: null,
                isLoading: true,
                error: null,
            }
        case PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                posts: action.payload.data,
                x_total_count: action.payload.x_total_count
            }
        case PostsActionsTypes.FETCH_POSTS_DATA_ERROR:
            return {
                ...state,
                isLoading: true,
                error: action.payload,
                x_total_count: null
            }
        case PostsActionsTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                isLoading: false,
                error: null,
                currentPage: action.page
            }
        case PostsActionsTypes.SORT_POSTS_SUCCESS:
            const sorted = state.posts.map(a => a)
            return {
                ...state,
                posts: sorted.sort((a, b) => (a.title < b.title ? -1 : 1))
            }
        case PostsActionsTypes.SEARCH_POSTS_SUCCESS:
            const value = action.payload.value
            const posts = action.payload.posts
            const postsFiltered = posts.filter(val => val.title.toLowerCase().includes(value))
            return {
                ...state,
                posts: postsFiltered
            }
        default:
            return state
    }
};

export default postsReducer;

