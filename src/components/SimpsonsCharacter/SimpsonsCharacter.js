import React from 'react';
const SimpsonsCharacter = ({name, surname, age, info, photo}) => {
    return (
        <div>
            <h2>{name} {surname} | Age: {age}</h2>
            <img src={photo} alt={name + "image"}/>
            <p>{info}</p>
        </div>
    );
};

export default SimpsonsCharacter;