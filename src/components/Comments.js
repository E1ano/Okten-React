import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {useDispatch, useSelector} from "react-redux";
import {commentsActions} from "../redux/slices/comments.slice";

const Comments = () => {
    const {comments} = useSelector(state => state.commentsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        placeholderService.getAllComments().then(data => data.data).then(data => dispatch(commentsActions.setAllComments(data)));
    }, []);

    return (
        <>
            <CommentForm/>
            <hr/>
            {comments.map(item => <Comment
                key={item.name}
                name={item.name}
                body={item.body}
                email={item.email}
            />)}
        </>
    );
};

export default Comments;