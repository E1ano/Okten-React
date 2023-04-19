import React, {useEffect, useImperativeHandle} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator";
import './FormStyles.css';
import carService from "../services/car.service";

const CarForm = React.forwardRef(({onSetCars, carForUpdate, setCarForUpdate}, ref) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate])

    useImperativeHandle(ref, () => ({
        reset: () => reset()
    }));
    const onSave = (value) => {
        carService.createCar(value)
            .then(data => data.data)
            .then(data => onSetCars((prev) => [...prev, data]));
        reset();
    }
    const onUpdate = (data) => {
        carService.updateCarById(carForUpdate.id, data);
        onSetCars(prev => prev.map(item => item.id === carForUpdate.id ? {id: item.id, ...data} : item));
        setCarForUpdate(null);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? onUpdate : onSave)}>
            <input type="text" id="input-1" placeholder={'brand'} {...register('brand')}/>
            <input type="text" id="input-2" placeholder={'price'} {...register('price')}/>
            <input type="text" id="input-3" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
            {errors.brand && <div id="error-1">{errors.brand.message}</div>}
            {errors.price && <div id="error-2">{errors.price.message}</div>}
            {errors.year && <div id="error-3">{errors.year.message}</div>}
        </form>
    );
});

export default CarForm;