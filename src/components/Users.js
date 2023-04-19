import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";
import User from "./User";
import UserForm from "./UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        placeholderService.getAllUsers().then(data => data.data).then(data => setUsers(data));
    }, []);

    return (
        <>
            <UserForm onSetUsers={setUsers}/>
            <hr/>
            {users.map(user => <User
                key={user.name}
                name={user.name}
                username={user.username}
                email={user.email}
            />)}
        </>
    );
};

export default Users;