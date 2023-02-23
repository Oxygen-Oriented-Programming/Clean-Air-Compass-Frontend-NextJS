import React from 'react';
import SidebarButton from './SidebarButton';

export default function Sidebar(props) {
  return (
    <>
      <div className='absolute top-0 right-0 flex flex-row items-center justify-around text-white transition-all bg-black hover:bg-center w-80 md:block'>
        <SidebarButton
          sidebar_show={props.showSidebar}
          set_show={props.setShowSidebar}
          handleLocationInput={props.handleLocationInput}
          handleSubmit={props.handleSubmit}
          loading={props.loading}
          text='X'
        />
      </div>
    </>
  );
}
