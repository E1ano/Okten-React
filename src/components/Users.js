import React, {useEffect} from 'react';
import placeholderService from "../services/placeholder.service";
import User from "./User";
import UserForm from "./UserForm";
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../redux/slices/users.slice";

const Users = () => {
    const {users} = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        placeholderService.getAllUsers().then(data => data.data).then(data => dispatch(usersActions.setAllUsers(data)));
    }, []);

    return (
        <>
            <UserForm/>
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