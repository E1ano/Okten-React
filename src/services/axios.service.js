import axios from "axios";
import {basePlaceholderURL} from "../configs/urls";

const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
export default axiosPlaceholderService;