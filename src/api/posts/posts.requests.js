import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";


export const fetchPostsApi = () =>
    appAxiosInstance.get(ApiUrls.posts).then(res=>{return res.data})