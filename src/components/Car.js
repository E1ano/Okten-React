import React from 'react';

const Car = ({car, onDelete, setCarForUpdate}) => {
    const {brand, price, year} = car;
    return (
        <>
            <div><b>Brand:</b> {brand}</div>
            <div><b>Price:</b> {price}</div>
            <div><b>Year:</b> {year}</div>
            <button onClick={() => setCarForUpdate(car)}>CHANGE</button>
            <button onClick={onDelete}>DELETE</button>
            <br/><br/>
        </>
    );
};

export default Car;