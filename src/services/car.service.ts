import {axiosCarsService, IRes} from "./axios.service";
import {urlsCars} from "../configs/urls";
import {ICar} from "../interfaces/car.interface";

const carService = {
    getAllCars: ():IRes<ICar[]> => axiosCarsService.get(urlsCars.cars),
    createCar: (car:ICar):IRes<ICar> => axiosCarsService.post(urlsCars.cars, car),
    updateCarById: (id:number, car:ICar):IRes<ICar> => axiosCarsService.put(`${urlsCars.cars}/${id}`, car),
    deleteCarById: (id:number):IRes<void> => axiosCarsService.delete(`${urlsCars.cars}/${id}`)

}
export default carService;