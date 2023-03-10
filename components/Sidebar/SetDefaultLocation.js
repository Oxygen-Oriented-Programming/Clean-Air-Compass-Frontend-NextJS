export default function SetDefaultLocation({
  auth_token,
  user_id,
  defaultChange,
}) {
  // this function sends a post request and if that fails it sends a put request
  // if the put request completes it will call defaultChange function which is a prop
  // defaultChange function sets the state of the location modal and shows on the modal that the location is changed

  async function backendapi_setLocation(e) {
    e.preventDefault();
    const location = e.target.default_location.value;
    const user_number = { user_id }.user_id;
    let putAttempt = null;
    const postAttempt = await fetch(
      `${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}create/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${auth_token}`,
        },
        body: JSON.stringify({ user: user_number, default_location: location }),
      }
    );
    if (postAttempt.status === 400) {
      putAttempt = await fetch(
        `${process.env.NEXT_PUBLIC_DEFAULT_LOCATION_BASE_URL}${user_number}/`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${auth_token}`,
          },
          body: JSON.stringify({
            user: user_number,
            default_location: location,
          }),
        }
      ).then(defaultChange(location));
    }
  }
  return (
    <>
      <div className="flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-transparent">
        <form
          onSubmit={backendapi_setLocation}
          className="items-center p-2 px-4 text-center transition-all duration-300 rounded-md cursor-pointer w-fit"
        >
          <div className="">
            <input
              type="text"
              id="default_location"
              className="px-10 py-2 font-mono text-lg text-center transition-all bg-gray-800 rounded-lg"
              placeholder="Set Default Location"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-1 mt-4 font-mono text-white transition-all bg-transparent border border-purple-500 rounded text-md hover:bg-purple-700 hover:border-transparent"
          >
            Set Default
          </button>
        </form>
      </div>
    </>
  );
}
