import React from 'react';

const Launch = ({mission_name, launch_year, mission_patch_small}) => {
    return (
        <>
            <div>Mission name: {mission_name}</div>
            <div>Launch year: {launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
            <br/><br/>
        </>
    );
};

export default Launch;