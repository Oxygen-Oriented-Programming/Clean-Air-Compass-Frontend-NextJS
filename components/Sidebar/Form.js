import LoadingButton from "./LoadingButton";

export default function Form(props) {
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className="w-fit p2.5 mt-3 text-center items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700"
      >
        <input
          name="location"
          type="text"
          onChange={props.handleLocationInput}
          placeholder="City / Zip Code"
          className="h-10 text-lg text-center bg-transparent focus:outline-none"
        />
        <div className="p-3">
          {props.loading ? (
            <LoadingButton />
          ) : (
            <button
              className="px-4 py-2 m-auto font-semibold text-blue-400 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
              type="submit"
              disabled={props.loading}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
