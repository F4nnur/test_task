import {appAxiosInstance} from "../api";
import {ApiUrls} from "../../constants/urls";

export const getUserAPI = async (id) => {
    const userData = await appAxiosInstance.get(ApiUrls.user + `?id=${id}`)
    return userData
}