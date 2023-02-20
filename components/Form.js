export default function Form(props) {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <label>Type a city name or zip code
          <input name="location" type="text" onChange={props.handleLocationInput} placeholder="Search for a City/Zip Code" />
        </label>
        <button id="formButton" type="submit">Submit</button>
      </form>
    </>
  );
}
