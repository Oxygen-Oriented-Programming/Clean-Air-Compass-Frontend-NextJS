export default function AlertMessage({ message, setMessage }) {
  const handleClick = () => {
    setMessage("");
  };
  return (
    <div
      className="absolute inset-x-0 z-10 flex flex-row items-center justify-around w-2/5 p-2 m-auto font-medium text-center text-black transition-all transform -translate-x-1/2 bg-red-400 border border-red-400 rounded-lg left-2/4 hover:bg-center md:block top-5"
      style={{ top: "1rem" }}
    >
      <button
        onClick={handleClick}
        className="absolute right-0 top-1 py-1 px-2 bg-white hover:bg-slate-500 rounded-lg mr-1 mb-1"
      >
        X
      </button>
      <div className="mr-5">{message}</div>
    </div>
  );
}
