import {useState, useEffect} from 'react';
import Post from "./Post";
import {getPostsData} from "../services/fetchData";

const placeholderUrl = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsData(placeholderUrl, setPosts);
    }, [])

    return (
        <>
            {
                posts.map(item => (
                    <Post key={item.id} {...item}/>
                ))
            }
        </>
    );
};

export default Posts;