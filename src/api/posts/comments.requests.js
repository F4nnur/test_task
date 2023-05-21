import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";


export const getCommentApi = async (id) => {
    const comment = await appAxiosInstance.get(ApiUrls.comments + id + "/comments/")
    return comment
}