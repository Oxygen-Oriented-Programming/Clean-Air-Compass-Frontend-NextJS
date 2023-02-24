import LoadingButton from './LoadingButton';

export default function Form(props) {
  return (
    <>
      <div className='flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-black'>
        <form
          onSubmit={props.handleSubmit}
          className='w-fit p2.5 mt-3 text-center items-center rounded-md px-4 transition-all cursor-pointer '
        >
          <input
            className='h-10 text-lg font-normal text-center transition-all bg-gray-800 rounded-lg'
            name='location'
            type='text'
            onChange={props.handleLocationInput}
            placeholder='Enter Location'
          />

          <div className='p-3'>
            {props.loading ? (
              <LoadingButton className='animate-pulse hover:animate-none' />
            ) : (
              <button
                className='px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent'
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
