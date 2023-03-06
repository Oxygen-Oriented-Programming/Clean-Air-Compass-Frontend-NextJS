import React from "react";

export default function AlertModalButton(props) {
  return (
    <div className="flex flex-col items-center space-y-4 transition-all h-fit mb-2">
      <button
        onClick={props.toggleAlertModal}
        className="px-9 py-4 mt-2 font-mono text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
      >
        <h1 className="text-2xl transition-all hover:animate-none">Alerts</h1>
      </button>
    </div>
  );
}
