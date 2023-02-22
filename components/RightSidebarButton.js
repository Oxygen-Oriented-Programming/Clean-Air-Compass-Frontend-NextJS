import React from 'react'

export default function RightSidebarButton(props) {
  return (
    <button
      className={
        props.sidebar_show ? 
        "bg-purple-600 m-auto w-10"
        :
        "fixed top-0 m-4 right-20"
      }
      onClick={() => props.set_show(!props.sidebar_show)}
    >
      {props.text}
    </button>
  );
}
