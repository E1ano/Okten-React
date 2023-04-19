import React, {createRef, useEffect, useRef, useState} from 'react';
import carService from "../services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const ref = createRef();

    useEffect(() => {
        carService.getAllCars().then(data => data.data).then(data => setCars(data));
    }, []);

    const deleteCarById = (id) => {
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