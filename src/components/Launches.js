import React, {useEffect, useState} from 'react';
import {getPostsData} from "../services/fetchData";
import Launch from "./Launch";

const launchesUrl = 'https://api.spacexdata.com/v3/launches/';
const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        getPostsData(launchesUrl, setLaunches);
    }, [])
    return (
        <>
            {
                launches.map((item, i) => (
                    item.launch_year !== '2020' &&
                    <Launch key={i}
                            mission_name={item.mission_name}
                            launch_year={item.launch_year}
                            mission_patch_small={item.links.mission_patch_small}
                    />
                ))
            }
        </>
    );
};

export default Launches;