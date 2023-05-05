import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../redux/slices/cars.slice";
import carService from "../services/car.service";

const Car = ({car}) => {
    const {brand, price, year} = car;
    const dispatch = useDispatch();
    const deleteCarById = (id) => {
        carService.deleteCarById(id);
        dispatch(carsActions.deleteCar(id));
    }

    return (
        <>
            <div><b>Brand:</b> {brand}</div>
            <div><b>Price:</b> {price}</div>
            <div><b>Year:</b> {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>CHANGE</button>
            <button onClick={() => deleteCarById(car.id)}>DELETE</button>
            <br/><br/>
        </>
    );
};

export default Car;