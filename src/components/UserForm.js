import React from 'react';
import {useForm} from "react-hook-form";
import placeholderService from "../services/placeholder.service";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator";
import './FormStyles.css';

const UserForm = ({onSetUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(userValidator)});
    const onSave = (value) => {
        placeholderService.createUser(value)
            .then(data => data.data)
            .then(data => onSetUsers((prev) => [...prev, data]));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSave)}>
            <input type="text" id="input-1" placeholder={'name'} {...register('name')}/>
            <input type="text" id="input-2" placeholder={'username'} {...register('username')}/>
            <input type="text" id="input-3" placeholder={'email'} {...register('email')}/>
            <button disabled={!isValid}>save</button>
            {errors.name && <div id="error-1">{errors.name.message}</div>}
            {errors.username && <div id="error-2">{errors.username.message}</div>}
            {errors.email && <div id="error-3">{errors.email.message}</div>}
        </form>
    );
};

export default UserForm;