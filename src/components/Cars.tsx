import React, {createRef, FC, useEffect, useRef, useState} from 'react';
import carService from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";
import {ICar} from "../interfaces/car.interface";


const Cars:FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null);
    const ref = createRef<any>();

    useEffect(() => {
        carService.getAllCars().then(data => data.data).then(data => setCars(data));
    }, []);

    const deleteCarById = (id:number):void => {
        carService.deleteCarById(id);
        setCars(prev => prev.filter(item => item.id !== id));
        ref.current.reset();
    }

    return (
        <>
            <CarForm ref={ref} onSetCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car => <Car
                key={car.id}
                car={car}
                onDelete={() => deleteCarById(car.id)}
                setCarForUpdate={setCarForUpdate}
            />)}
        </>
    );
};

export default Cars;