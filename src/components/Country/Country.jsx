import React, { useState } from 'react';
import "./Country.css"
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {

    const[visited, setVisited] =useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`card ${visited && "visited"}`}>
            <img src={country.flags.flags.png} alt="country.flags.flags.png" />
            <h3>Country name: {country.name.common}</h3>
            <p>Area: {country.area.area}</p>
            <button onClick={handleVisited}>{visited? 'Have visited' : "Going soon"}</button>
            <button onClick={()=>handleVisitedCountries(country)}>Mark as Visited</button>
            <button onClick={()=>handleVisitedFlag(country.flags.flags.png)}>Mark as Visited Flag</button>
        </div>
    );
};

export default Country;