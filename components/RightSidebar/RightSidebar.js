import React from 'react';
import RightSidebarButton from './RightSidebarButton';

export default function RightSidebar(props) {
  return (
    <>
      <div className='absolute top-0 right-0 flex flex-row items-center justify-around h-full text-white bg-black hover:bg-center w-80 md:block'>
        <RightSidebarButton
          sidebar_show={props.sidebar_show}
          set_show={props.set_show}
          text='X'
        />
      </div>
    </>
  );
}