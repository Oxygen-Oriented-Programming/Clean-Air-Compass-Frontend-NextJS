import React from 'react';
import RightSidebarButton from './RightSidebarButton';
import RightNavTitle from './RightNavTitle';
import RightNavLinks from './RightNavLinks';

export default function RightSidebar(props) {
  return (
    <>
      <div className='fixed top-0 right-0 flex flex-row items-center justify-around h-screen text-white bg-black hover:bg-center w-80 md:block'>
        <RightSidebarButton
          sidebar_show={props.sidebar_show}
          set_show={props.set_show}
          text='X'
        />
        <RightNavTitle />
        <RightNavLinks />
      </div>
    </>
  );
}
