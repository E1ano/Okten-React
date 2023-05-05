import {axiosCarsService} from "./axios.service";
import {urlsCars} from "../constans/urls";

const carService = {
    getAllCars: () => axiosCarsService.get(urlsCars.cars),
    createCar: (car) => axiosCarsService.post(urlsCars.cars, car),
    updateCarById: (id, car) => axiosCarsService.put(`${urlsCars.cars}/${id}`, car),
    deleteCarById: (id) => axiosCarsService.delete(`${urlsCars.cars}/${id}`)

}
export default carService;