import React from 'react';
import Image from 'next/image';
import logo from 'public/logo.png';

export default function NavTitle() {
  return (
    <div className='flex items-center gap-4 pt-4 space h-fit'>
      <Image className='pl-2 w-14 h-11' src={logo} alt='' />
      <span className='text-xl font-extrabold text-white'>
        <h1>CleanAir Compass</h1>
      </span>
    </div>
  );
}
