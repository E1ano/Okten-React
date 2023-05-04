import axios from "axios";
import {basePlaceholderURL} from "../constans/urls"; //add cars later
const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
// const axiosCarsService = axios.create({baseURL: baseCarsURL});

export {
    axiosPlaceholderService,
    // axiosCarsService
}