import React from 'react'
import Image from 'next/image';
import logo from "public/logo.png";

export default function NavTitle() {
  return (
    <div className="flex items-center pt-2 space gap-x-2.5 ">
      <Image className=" w-11 h-11" src={logo} alt="" />
      <span className="text-lg font-extrabold text-white">
        <h1>CleanAir Compass</h1>
      </span>
    </div>
  );
}
