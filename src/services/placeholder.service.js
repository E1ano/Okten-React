import axiosPlaceholderService from "./axios.service";
import {urlsPlaceholder} from "../configs/urls";


const placeholderService = {
    getTodos: () => axiosPlaceholderService.get(urlsPlaceholder.todos),
    getAlbums: () => axiosPlaceholderService.get(urlsPlaceholder.albums),
    getComments: () => axiosPlaceholderService.get(urlsPlaceholder.comments),
    getPostById: (id) => axiosPlaceholderService.get(`${urlsPlaceholder.posts}/${id}`)
}
export default placeholderService;