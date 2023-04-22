import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect (() => {
        placeholderService.getTodos()
            .then(data => data.data)
            .then(data => setTodos(data));
    }, [])

    return (
        <div>
            <h2>Todos:</h2>
            {
                todos?.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)
            }
        </div>
    );
};

export default Todos;