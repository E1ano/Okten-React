import React, {useState} from 'react';

const Post = ({id, userId, title, body}) => {
    const [fullData, setFullData] = useState(false);

    const changeFullData = () => {
        setFullData(prevData => !prevData);
    }

    return (
        <>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            {
                fullData &&
                    <>
                        <div>UserId: {userId}</div>
                        <div>Body: {body}</div>
                    </>
            }
            <button onClick={changeFullData}>GET FULL DATA</button>
            <br/><br/>
        </>
    );
};

export default Post;