import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";
import {Link, Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect (() => {
        placeholderService.getComments()
            .then(data => data.data)
            .then(data => setComments(data));
    }, [])

    return (
        <div>
            <h2>Comments:</h2>
            <Outlet/>
            <br/><br/>
            {
                comments?.map(item => {
                    return (
                        <div key={item.id}>
                            <Link to={`posts/${item.id.toString()}`} state={item.id}>{JSON.stringify(item)}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Comments;