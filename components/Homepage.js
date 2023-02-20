import Map from './Map'
import Form from './Form'
import { useState } from 'react';

export default function Homepage() {
    const [locationName, setLocationName] = useState(null);

    function handleLocationInput(e) {
        setLocationName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // change to call Fast API:
        // let locationData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${locationName}&format=json`);
        // 
    }
    
    return (
        <>
            <h1>Clean Air Compass</h1>
            <Form handleLocationInput={handleLocationInput} handleSubmit={handleSubmit} />
            {/* The line below is just to show the update to state */}
            <h1>{ locationName }</h1> 
            <Map />
        </>
    )
}
