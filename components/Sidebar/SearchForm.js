import LoadingButton from "./Buttons/LoadingButton";

export default function Form(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <form
          onSubmit={(e) =>
            props.handleSubmit(
              e,
              props.inputRef,
              props.setMessage,
              props.setLoading,
              props.fly_animation,
              props.setLocationData,
              props.map
            )
          }
          className="items-center px-4 text-center rounded-md cursor-pointer w-fit "
        >
          <input
            className="h-10 py-8 mt-10 font-mono text-lg font-normal text-center bg-gray-800 rounded-lg"
            name="location"
            type="text"
            ref={props.inputRef}
            placeholder="Enter Location"
          />

          <div className="p-3">
            {props.loading ? (
              <LoadingButton className="animate-pulse hover:animate-none" />
            ) : (
              <button
                className="px-8 py-4 font-mono text-2xl text-white transition-all border rounded bg-violet-700 border-violet-800 hover:bg-white hover:text-violet-700"
                type="submit"
                disabled={props.loading}
              >
                Explore
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
