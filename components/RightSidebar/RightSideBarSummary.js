export default function RightSummary() {
  return (
    <>
      <div className="flex flex-col items-center p-4 text-center align w-fit ">
        <div className="w-fit p-2.5 mt-3 text-center items-center rounded-xl px-4 duration-300 h-fit bg-gray-800 ">
          <div className="block pt-2 mb-2 font-medium ">
            <h1
              className="block font-medium text-slates-600 text-md mb-2"
            >
              Why is PM 2.5 important?
            </h1>
            <p className="text-sm text-gray-200">
              In the air, there exists a mixture of solid and liquid particles
              known as Particulate Matter (PM). PM2.5 refers to particles that
              are smaller than 2.5 micrometres in diameter and remain suspended
              in the air for longer periods of time. The formation of these
              particles is a result of burning fuels and chemical reactions that
              occur in the atmosphere, as well as natural processes such as
              forest fires.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
