import Map from './Map'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios';

export default function Homepage() {
    const [locationName, setLocationName] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [distance, setDistance] = useState('');

    function handleLocationInput(e) {
        setLocationName(e.target.value);
    }

    function handleDistanceChange(e) {
        setDistance(e.target.value);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const zipRegex = /^\d{5}(-\d{4})?$/;
        const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
            // let apiData = 
            // pass distance too so we can change the zoom
            // setLocationData(apiData)
        } else {
            alert("This is not a valid city name or zip code")
        }
    }
    
    return (
        <>
            <h1>Clean Air Compass</h1>
            <Form handleLocationInput={handleLocationInput} handleDistanceChange={handleDistanceChange} handleSubmit={handleSubmit} />
            <Map locationData={locationData} />
        </>
    )
}
