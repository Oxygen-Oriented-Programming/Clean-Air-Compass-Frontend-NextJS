import React from 'react';
import Image from 'next/image';
import logo from 'public/logo.png';

export default function NavTitle() {
  return (
    <div className='flex items-center gap-4 pt-6 transition-all w-[30vw] space h-fit '>
      <Image
        className='transition-all w-14 animate-pulse h-14 hover:hover:animate-spin'
        src={logo}
        alt=''
      />
      <span className='text-lg font-extrabold text-white transition-all hover:cursor-none'>
        <h1>CleanAir Compass</h1>
      </span>
    </div>
  );
}
