import { useState } from 'react';

export default function Form() {
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
      <form onSubmit={handleSubmit}>
        <label>Type a city name or zip code
          <input name="location" type="text" value={locationName} onChange={handleLocationInput} placeholder="Search for a City/Zip Code" />
        </label>
        <button id="formButton" type="submit">Submit</button>
      </form>
      {/* The line below is just to show the update to state */}
      <h1>{ locationName }</h1> 
    </>
  );
}
