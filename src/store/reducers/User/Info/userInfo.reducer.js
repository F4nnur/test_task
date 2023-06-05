import {UserActionTypes} from "../../../../constants/actions";

const InitialState = {
    data: [],
    isLoading: true,
    error: null,
}

const userInfoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_DATA:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
                error: null
            }
        case UserActionTypes.FETCH_USER_DATA_ERROR:
            return {
                ...state,
                isLoading: true,
                error: action.error
            }
        default:
            return state
    }
}

export default userInfoReducer;