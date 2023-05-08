export default function AlertMessage({ message }) {
  return (
    <div
      className="absolute inset-x-0 z-10 flex flex-row items-center justify-around w-2/5 p-2 m-auto font-medium text-center text-red-700 transition-all transform -translate-x-1/2 bg-red-100 border border-red-400 rounded-lg left-2/4 hover:bg-center md:block top-5"
      style={{ top: "1rem" }}
    >
      {message}
    </div>
  );
}
