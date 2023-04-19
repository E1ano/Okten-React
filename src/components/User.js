import React from 'react';

const User = ({name, username, email}) => {
    return (
        <>
            <div><b>Name:</b> {name}</div>
            <div><b>Username:</b> {username}</div>
            <div><b>Email:</b> {email}</div>
            <br/><br/>
        </>
    );
};

export default User;