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
            className='h-10 py-8 text-lg font-normal text-center transition-all bg-gray-800 rounded-lg font-mono mt-10'
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
                className='px-8 py-4 text-white transition-all bg-violet-700 border border-violet-800 rounded hover:bg-white hover:text-violet-700 text-2xl font-mono'
                type='submit'
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
