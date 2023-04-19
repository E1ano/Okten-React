import React from 'react';

const Comment = ({name, email, body}) => {
    return (
        <>
            <div><b>Name:</b> {name}</div>
            <div><b>Email:</b> {email}</div>
            <div><b>Body:</b> {body}</div>
            <br/><br/>
        </>
    );
};

export default Comment;