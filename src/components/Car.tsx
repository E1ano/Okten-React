import React, {Dispatch, FC, SetStateAction} from 'react';
import {ICar} from "../interfaces/car.interface";

interface IProps {
    car: ICar;
    onDelete: () => void;
    setCarForUpdate: Dispatch<SetStateAction<ICar|null>>;
}
const Car:FC<IProps> = ({car, onDelete, setCarForUpdate}) => {
    const {brand, price, year} = car;
    return (
        <>
            <div><b>Brand:</b> {brand}</div>
            <div><b>Price:</b> {price}</div>
            <div><b>Year:</b> {year}</div>
            <button onClick={() => setCarForUpdate(car)}>CHANGE</button>
            <button onClick={onDelete}>DELETE</button>
            <br/><br/>
        </>
    );
};

export default Car;
