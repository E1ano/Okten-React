import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        placeholderService.getAllComments().then(data => data.data).then(data => setComments(data));
    }, []);

    return (
        <>
            <CommentForm onSetComments={setComments}/>
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