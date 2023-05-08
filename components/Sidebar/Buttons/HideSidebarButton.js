import React from "react";

export default function ShowSidebarButton(props) {
  return (
    <button
      className="fixed mr-5 text-purple-500 border-white rounded-md left-56 top-1"
      onClick={() => props.set_show(!props.sidebar_show)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="fixed z-40 w-6 h-6 left-64"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
}
