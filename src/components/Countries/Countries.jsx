import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesFetch}) => {
    const countriesData = use(countriesFetch)
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlag=(flag) =>{
        setVisitedFlags([...visitedFlags, flag])
    }

    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <h3>visited flags: {visitedFlags.length}</h3>

            <ol>
                {
                    visitedCountries.map((country, index) => <li key={index}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }                
            </div> 

            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.cca3.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                        country={country}></Country>)
                }
            </div>  
        </div>
    );
};

export default Countries;