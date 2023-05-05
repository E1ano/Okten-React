import React from 'react';
import {useForm} from "react-hook-form";
import placeholderService from "../services/placeholder.service";
import {joiResolver} from "@hookform/resolvers/joi";
import commentValidator from "../validators/comment.validator";
import './FormStyles.css';
import {useDispatch} from "react-redux";
import {commentsActions} from "../redux/slices/comments.slice";

const CommentForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'all', resolver: joiResolver(commentValidator)});
    const dispatch = useDispatch();
    const onSave = (value) => {
        placeholderService.createComment(value)
            .then(data => data.data)
            .then(data => dispatch(commentsActions.addNewComment(data)));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSave)}>
            <input type="text" id="input-1" placeholder={'name'} {...register('name')}/>
            <input type="text" id="input-2" placeholder={'body'} {...register('body')}/>
            <input type="text" id="input-3" placeholder={'email'} {...register('email')}/>
            <button disabled={!isValid}>save</button>
            {errors.name && <div id="error-1">{errors.name.message}</div>}
            {errors.body && <div id="error-2">{errors.body.message}</div>}
            {errors.email && <div id="error-3">{errors.email.message}</div>}
        </form>
    );
};

export default CommentForm;