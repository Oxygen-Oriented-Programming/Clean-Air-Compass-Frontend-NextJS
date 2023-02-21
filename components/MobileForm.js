export default function MobileForm(props) {
  return (
    <>
      <form
        onSubmit={props.handleSubmit}
        className='flex flex-row justify-center text-center duration-300 bg-gray-700 rounded-md cursor-pointer w-fit'
      >
        <input
          name='location'
          type='text'
          onChange={props.handleLocationInput}
          placeholder='City / Zip Code'
          className='text-sm text-center bg-transparent h-7 focus:outline-none'
        />
        <div className='p-2'>
          <button
            className='px-2 py-1 m-auto text-xs font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent'
            type='submit'
          >Submit
          </button>
        </div>
      </form>
    </>
  );
}