export default function SetDefaultLocation({ auth_token, user_id, defaultCrud }) {
  async function backendapi_setLocation(e) {
    e.preventDefault();
    const location = e.target.default_location.value;
    const user_number = { user_id }.user_id;
    fetch(`${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}create/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${auth_token}`,
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

        fetch(
          `${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}${user_number}/`,
          {
            method: 'put',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${auth_token}`,
            },
            body: JSON.stringify({
              user: user_number,
              default_location: location,
            }),
          }
        ).then((response) => response.json()).then(defaultCrud(location))
      });
  }
  return (
    <>
      <div className='flex flex-col items-center w-full h-full space-y-2.5 bg-black'>
        <form
          onSubmit={backendapi_setLocation}
          className='items-center p-2.5 px-4 mt-3 text-center duration-300 bg-gray-800 rounded-md cursor-pointer w-fit'
        >
          <div className='p-2.5'>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Default Location
            </label>
            <input
              type='text'
              id='default_location'
              className='h-10 text-lg font-normal text-center bg-transparent rounded-lg'
              placeholder='Seattle'
              required
            ></input>
          </div>
          <button
            type='submit'
            className='px-4 py-2 m-auto font-semibold text-blue-400 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
