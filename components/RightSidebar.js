import React from 'react'
import RightSidebarButton from './RightSidebarButton';


export default function RightSidebar(props) {
  console.log(props)
  return (
    <div className="absolute top-0 right-0 flex flex-row items-center justify-around w-64 h-full bg-gray-200 md:block">
      <RightSidebarButton
        sidebar_show={props.sidebar_show}
        set_show={props.set_show}
        text = 'Hide'
      />
    </div>
  );
}
