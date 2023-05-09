import React from "react";
import Image from "next/image";
import logo from "public/logo.png";

export default function SidebarButton(props) {
  return (
    <>
      <button
        className="fixed z-50 flex flex-col items-center p-2 ml-3 text-sm font-bold text-white bg-black border-2 border-black rounded-lg cursor-pointer top-3 left-10 w-70 hover:bg-black"
        onClick={() => props.set_show(!props.sidebar_show)}
      >
        <Image
          className="transition-all w-14 animate-pulse h-14 hover:hover:animate-spin"
          src={logo}
          alt=""
        />{" "}
        <p>Open Sidebar</p>
      </button>
    </>
  );
}
