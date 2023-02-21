import { useState } from 'react';

export default function Form(props) {
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
      <div
        onSubmit={props.handleSubmit}
        className='p2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700'
      >
        <i className='bg-transparent text-md bi bi-search'></i>
        <label>
          <input
            name='location'
            type='text'
            value={locationName}
            onChange={props.handleLocationInput}
            placeholder='Search for a City/Zip Code'
            className='w-full h-10 ml-4 text-xl text-left bg-transparent focus:outline-none '
          />
        </label>
        {/* The line below is just to show the update to state */}
      </div>
      <div className='p-3'>
        <button
          className='px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
          id='formButton'
          type='submit'
        >
          Submit
        </button>
      </div>
      {/* <h1>{locationName}</h1> */}
        {/* <label htmlFor="distance">Select a distance range:</label>
        <select name="distance" id="distance" onChange={props.handleDistanceChange}>
          <option value="5">Within 5 miles</option>
          <option value="25">Within 25 miles</option>
          <option value="100">Within 100 miles</option>
          <option value="500">Within 500 miles</option>
        </select>
        <button id="formButton" type="submit">Submit</button> */}
    </>
  );
}
