export default function Form(props) {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label>Type a city name or zip code
          <input name="location" type="text" onChange={props.handleLocationInput} placeholder="Search for a City/Zip Code" />
        </label>
        <label htmlFor="distance">Select a distance range:</label>
        <select name="distance" id="distance" onChange={props.handleDistanceChange}>
          <option value="5">Within 5 miles</option>
          <option value="25">Within 25 miles</option>
          <option value="100">Within 100 miles</option>
          <option value="500">Within 500 miles</option>
        </select>
        <button id="formButton" type="submit">Submit</button>
      </form>
    </>
  );
}
