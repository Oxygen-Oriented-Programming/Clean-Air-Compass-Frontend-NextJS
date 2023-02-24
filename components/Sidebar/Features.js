import React from 'react'

export default function Features({handleReturnClick, returnAnimation, showFeatures, showAbout}) {
  return (
    <>
      <button
        className="px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
        onClick={handleReturnClick}
        style={{
          transform: returnAnimation
            ? "transition-all translateY(100%)"
            : "transition-all translateY(0%)",
        }}
      >
        Close Features
      </button>
      <ol
        className="flex flex-col items-center justify-around text-sm inside "
        style={{
          height: "100%",
          transform: returnAnimation
            ? "transition-all translateY(100%)"
            : "transition-all translateY(0%)",
          opacity: showFeatures || showAbout ? 1 : 0,
          transition: "all 0.5s ease-in-out",
          overflow: "visible",
        }}
      >
        <li className="mt-4 mb-2 font-bold">MAP</li>
        <li className="m-1">
          Clean Air Compass currently uses data from the
          <span className="font-bold text-purple-600">
            &nbsp;Purple Air
          </span>{" "}
          network of air quality monitoring sensors.
        </li>
        <li className="m-1">
          This information is used to estimate and display
          <span className="font-bold text-purple-600">&nbsp;PM 2.5</span> air
          pollution across a wide area rather than just displaying readings at
          individual sensor locations.
        </li>
        <li className="m-1">
          Users can search for either a city or postal code within the US and
          get back an air quality map. International support is not
          available...YET.
        </li>
        <li className="mt-4 mb-2 font-bold">ALERTS</li>
        <li className="m-1">
          Users can sign up for{" "}
          <span className="font-bold text-purple-600">text alerts</span> to stay
          informed about air quality risks in their area.
        </li>
      </ol>
    </>
  );
}
