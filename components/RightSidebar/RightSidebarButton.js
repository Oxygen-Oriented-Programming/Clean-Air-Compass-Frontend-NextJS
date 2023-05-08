export default function RightSidebarButton(props) {
  return (
    <>
      <div
        className={`transition duration-200 ease-in-out ${
          props.sidebar_show
            ? "p-2 text-2xl hover:text-gray-400 text-white text-align-center ml-2 mt-0.5 font-bold cursor-pointer"
            : "hover:text-white bg-transparent font-bold p-4 rounded-lg border-2 border-black hover:bg-black cursor-pointer md:fixed lg:fixed md:bottom-auto lg:bottom-auto md:top-5 md:right-20 lg:top-5 lg:right-20"
        }`}
        onClick={() => props.set_show(!props.sidebar_show)}
      >
        {props.text}
      </div>
    </>
  );
}
