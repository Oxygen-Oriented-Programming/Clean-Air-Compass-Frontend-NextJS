export default function SetDefaultLocation({ auth_token, user_id }) {
  async function backendapi_setLocation(e) {
    e.preventDefault();
    const location = e.target.default_location.value;
    const user_number = { user_id }.user_id;
    fetch(`${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}create/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: user_number, default_location: location }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error during POST request.');
        }
      })
      .catch((error) => {
        console.log('catching');
        fetch(`${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}${user_number}/`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: user_number,
            default_location: location,
          }),
        }).then((response) => response.json());
      });
  }
  return (
    <>
      <form onSubmit={backendapi_setLocation}>
        <div>
          <label
            htmlFor='first_name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Default Location
          </label>
          <input
            type='text'
            id='default_location'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Seattle'
            required
          ></input>
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </>
  );
}
