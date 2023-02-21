import { useState } from 'react';

export default function MobileForm(props) {
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
        className='flex flex-row justify-center text-center duration-300 bg-gray-700 rounded-md cursor-pointer w-fit'
      >
        <i className='bg-transparent text-md bi bi-search'></i>
        <label>
          <input
            name='location'
            type='text'
            value={locationName}
            onChange={props.handleLocationInput}
            placeholder='City / Zip Code'
            className='text-sm text-center bg-transparent h-7 focus:outline-none'
          />
        </label>
        {/* The line below is just to show the update to state */}
      </div>
      <div className='p-2'>
        <button
          className='px-2 py-1 m-auto text-xs font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
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
