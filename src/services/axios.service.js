import axios from "axios";
import {basePlaceholderURL, baseCarsURL} from "../configs/urls";

const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosPlaceholderService,
    axiosCarsService
}