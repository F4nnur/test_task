import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";

export const getUserPostsAPI = async (id) => {
    const userPosts = await appAxiosInstance.get(ApiUrls.posts + `?userId=${id}`)
    return userPosts
}