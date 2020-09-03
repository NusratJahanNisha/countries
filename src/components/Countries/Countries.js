import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    const { name, capital } = props.country;
    return (
        <div style={{ border: '1px solid purple', margin: '20px', padding: '40px', borderRadius: '30px' }}>
            <h3>Name: {name}</h3>
            <h3>Capital: {capital}</h3>
            <p> <Link to={`/country/${name}`}>Get details of {name}</Link> </p>
        </div>
    );
};

export default Countries;