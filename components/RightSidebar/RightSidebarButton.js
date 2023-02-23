import React from 'react';
import RightNavTitle from './RightNavTitle';
import RightNavLinks from './RightNavLinks';

export default function RightSidebarButton(props) {
  return (
    <>
      <div
        className={
          props.sidebar_show
            ? 'flex flex-row p-2 text-2xl hover:text-gray-400 text-white text-align-center ml-2 mt-0.5 font-bold cursor-pointer'
            : 'hover:text-white bg-transparent font-bold p-4 rounded-lg border-2 border-black hover:bg-black fixed top-0 m-4 right-20 cursor-pointer transition duration-200 ease-in-out'
        }
        onClick={() => props.set_show(!props.sidebar_show)}
      >
        {props.text}
      </div>
      <RightNavTitle />
      <RightNavLinks />
    </>
  );
}
