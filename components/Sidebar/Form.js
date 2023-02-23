import LoadingButton from './LoadingButton';

export default function Form(props) {
  return (
    <>
      <div className='flex flex-col items-center w-full space-y-2.5'>
        <form
          onSubmit={props.handleSubmit}
          className='w-fit p2.5 mt-3 text-center items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700'
        >
          <label
            htmlFor='first_name'
            className='block mb-2 font-medium text-gray-900 text-md dark:text-white'
          >
            Enter Location
          </label>
          <input
            className='h-10 text-lg font-normal text-center bg-transparent rounded-lg'
            name='location'
            type='text'
            onChange={props.handleLocationInput}
            placeholder='City / Zip Code'
          />

          <div className='p-3'>
            {props.loading ? (
              <LoadingButton />
            ) : (
              <button
                className='px-4 py-2 m-auto font-semibold text-blue-400 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
                type='submit'
                disabled={props.loading}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
