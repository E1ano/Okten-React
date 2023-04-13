import React, {useEffect, useState} from 'react';
import {getPostsData} from "../services/fetchData";
import Launch from "./Launch";
import User from "./User";

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getPostsData(usersUrl, setUsers);
    }, [])

    return (
        <>
            {
                users.map((item, i) => (
                    <User key={i}
                          id={item.id}
                          name={item.name}
                          username={item.username}
                          email={item.email}
                    />
                ))
            }
        </>
    );
};

export default Users;