import React, {useEffect} from 'react';
import carService from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux/slices/cars.slice";

const Cars = () => {
    const {cars} = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAllCars().then(data => data.data).then(data => dispatch(carsActions.setAllCars(data)));
    }, []);


    return (
        <>
            <CarForm/>
            <hr/>
            {cars.map(car => <Car
                key={car.id}
                car={car}
            />)}
        </>
    );
};

export default Cars;