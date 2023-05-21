import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";


export const getPostsAPI = async (id) => {
    const posts = await appAxiosInstance.get(ApiUrls.posts_comments`${id}/comments`)
    return posts
}