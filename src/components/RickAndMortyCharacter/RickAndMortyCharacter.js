import React from 'react';

const RickAndMortyCharacter = ({name, status, species, gender, image}) => {
    return (
        <div>
            <h2>{name}</h2>
            <div><b>Status:</b> {status} | <b>Species:</b> {species} | <b>Gender:</b> {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default RickAndMortyCharacter;