import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";
import {useLocation} from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState(null);
    const location = useLocation();

    useEffect (() => {
        placeholderService.getPostById(location.state)
            .then(data => data.data)
            .then(data => setPost(data));
    }, [])

    return (
        <div>
            <h2>Post details:</h2>
            {
                post && <div>{JSON.stringify(post)}</div>
            }
        </div>
    );
};

export default Post;