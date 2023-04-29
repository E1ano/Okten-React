import React, {Dispatch, FC, SetStateAction, useEffect, useImperativeHandle} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
// import carValidator from "../validators/car.validator";
import './FormStyles.css';
import carService from "../services/car.service";
import {ICar} from "../interfaces/car.interface";

interface IProps {
    ref: any
    setCarForUpdate: Dispatch<SetStateAction<ICar|null>>;
    carForUpdate: ICar|null;
    onSetCars: Dispatch<SetStateAction<ICar[]>>;
}

const CarForm:FC<IProps> = React.forwardRef(({onSetCars, carForUpdate, setCarForUpdate}, ref) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({mode: 'all'});
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
    const onSave:SubmitHandler<ICar> = (value) => {
        carService.createCar(value)
            .then(data => data.data)
            .then(data => onSetCars((prev) => [...prev, data]));
        reset();
    }
    const onUpdate:SubmitHandler<ICar> = (data) => {
        carService.updateCarById(carForUpdate!.id, data);
        onSetCars(prev => prev.map(item => item.id === carForUpdate!.id ? {...data, id: item.id} : item));
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