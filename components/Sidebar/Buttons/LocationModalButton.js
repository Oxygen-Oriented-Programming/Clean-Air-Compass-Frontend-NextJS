import React from "react";

export default function LocationModalButton(props) {
  return (
    <div className="flex flex-col items-center space-y-4 transition-all h-fit mb-2">
      <button
        onClick={props.toggleLocationModal}
        className="px-6 py-2 mt-2 font-mono text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
      >
        <h1 className="text-2xl transition-all hover:animate-none">Default</h1>
        <h1 className="text-2xl transition-all hover:animate-none">Location</h1>
      </button>
    </div>
  );
}
