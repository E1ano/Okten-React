import axios, {AxiosResponse} from "axios";
import {basePlaceholderURL, baseCarsURL} from "../configs/urls";

const axiosPlaceholderService = axios.create({baseURL: basePlaceholderURL});
const axiosCarsService = axios.create({baseURL: baseCarsURL});
type IRes<T> = Promise<AxiosResponse<T>>

export {
    axiosPlaceholderService,
    axiosCarsService
}

export type {
    IRes
}