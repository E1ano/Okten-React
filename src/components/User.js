import React, {useState} from 'react';
import {getPostsData} from "../services/fetchData";

const User = ({id, name, username, email}) => {
    const [currentPosts, setCurrentPosts] = useState([]);
    const [activeBtn, setActiveBtn] = useState(false);
    const getPosts = () => {
        setActiveBtn(prevActiveBtn => !prevActiveBtn);
        if (!activeBtn) {
            getPostsData(`https://jsonplaceholder.typicode.com/users/${id}/posts`, setCurrentPosts);
        }
    }

    return (
        <>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <br/><br/>
            {
                activeBtn ?
                    currentPosts.map((item, i) => (
                        <React.Fragment key={i}>
                            <div>Title: {item.title}</div>
                            <div>Body: {item.body}</div>
                            <br/>
                        </React.Fragment>
                    ))
                    : null
            }
            <button onClick={getPosts}>SHOW POSTS</button>
            <br/><br/>
        </>
    );
};

export default User;