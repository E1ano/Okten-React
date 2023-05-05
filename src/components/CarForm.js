import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../validators/car.validator";
import './FormStyles.css';
import carService from "../services/car.service";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux/slices/cars.slice";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all', resolver: joiResolver(carValidator)});
    const {carForUpdate} = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate])

    const onSave = (value) => {
        carService.createCar(value)
            .then(data => data.data)
            .then(data => dispatch(carsActions.addNewCar(data)));
        reset();
    }
    const onUpdate = (data) => {
        carService.updateCarById(carForUpdate.id, data);
        dispatch(carsActions.updateCar(data))
        dispatch(carsActions.clearCarForUpdate());
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
};

export default CarForm;