export default function SetDefaultLocation({
  auth_token,
  user_id,
  defaultCrud,
}) {
  async function backendapi_setLocation(e) {
    e.preventDefault();
    const location = e.target.default_location.value;
    const user_number = { user_id }.user_id;
    let putAttempt = null;
    const postAttempt = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}create/`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${auth_token}`,
        },
        body: JSON.stringify({ user: user_number, default_location: location }),
      }
    );
    if (postAttempt.status === 400) {
      putAttempt = await fetch(
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
      ).then(defaultCrud(location));
    }
  }
  return (
    <>
      <div className='flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-transparent'>
        <form
          onSubmit={backendapi_setLocation}
          className='items-center transition-all p-2.5 px-4 mt-3 text-center duration-300 rounded-md cursor-pointer w-fit'
        >
          <div className=''>
            <input
              type='text'
              id='default_location'
              className='h-16 text-lg font-normal text-center transition-all bg-gray-800 '
              placeholder='Default Location'
              required
            />
          </div>
          <button
            type='submit'
            className='px-6 py-4 mt-4 mb-2 font-mono text-2xl text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
