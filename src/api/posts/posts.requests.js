import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";


export const getPostsAPI = async (limit, page) => {
    const posts = await appAxiosInstance.get(ApiUrls.posts + `?_limit=${limit}&_page=${page}`)
    return posts
}