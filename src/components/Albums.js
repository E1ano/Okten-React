import React, {useEffect, useState} from 'react';
import placeholderService from "../services/placeholder.service";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect (() => {
        placeholderService.getAlbums()
            .then(data => data.data)
            .then(data => setAlbums(data));
    }, [])

    return (
        <div>
            <h2>Albums:</h2>
            {
                albums?.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)
            }
        </div>
    );
};

export default Albums;