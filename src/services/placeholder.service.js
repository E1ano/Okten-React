import axiosPlaceholderService from "./axios.service";
import {urlsPlaceholder} from "../configs/urls";


const placeholderService = {
    getComments: () => axiosPlaceholderService.get(urlsPlaceholder.comments),
    getPosts: () => axiosPlaceholderService.get(urlsPlaceholder.posts),
}
export default placeholderService;