import {FetchPostsSuccessAction, PostsState} from "../../reducers/posts/posts.types";
import {PostsActionsTypes} from "../../../constants/actions";

export const setPosts = () => ({
    type: PostsActionsTypes.FETCH_POSTS_DATA_SUCCESS
});
