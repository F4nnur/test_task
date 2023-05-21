import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";


export const getPostsAPI = async () => {
    const posts = await appAxiosInstance.get(ApiUrls.posts)
    return posts
}