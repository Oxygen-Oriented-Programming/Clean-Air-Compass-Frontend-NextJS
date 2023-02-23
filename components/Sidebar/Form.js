import LoadingButton from './LoadingButton';

export default function Form(props) {
  return (
    <>
      <div className='flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-black'>
        <form
          onSubmit={props.handleSubmit}
          className='w-fit p2.5 mt-3 text-center items-center rounded-md px-4 transition-all cursor-pointer bg-gray-800'
        >
          <label
            htmlFor='first_name'
            className='block pt-2 mb-2 text-sm font-medium text-gray-900 transition-all dark:text-white'
          >
            Enter Location
          </label>
          <input
            className='h-10 text-lg font-normal text-center transition-all bg-transparent rounded-lg'
            name='location'
            type='text'
            onChange={props.handleLocationInput}
            placeholder='City / Zip Code'
          />

          <div className='p-3'>
            {props.loading ? (
              <LoadingButton className='animate-pulse hover:animate-none' />
            ) : (
              <button
                className='px-4 py-2 m-auto font-semibold text-blue-400 transition-all bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
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
