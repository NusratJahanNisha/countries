import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { countryName } = useParams();
        const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(res => res.json())
            .then(data => setDetails(data[0]));
    }, [])

    return (
        <div style={{border:'1px solid blue', padding: '10px', borderRadius:'30px',margin: '50px'}}>
            <h3>Name: {details.name}</h3>
            <h3>Capital: {details.capital}</h3>
            <h3>Region: {details.region}</h3>
            <h3>Population: {details.population}</h3>
            <h3>Native name:{details.nativeName}</h3>
        </div>
    );
};

export default Details;
