import React from 'react';
import RightNavSummary from './RightNavSummary';

export default function RightNavTitle() {
  return (
    <>
      <div className='flex flex-col p-5 text-center bg-black h-fit'>
        <h1 className='text-3xl font-bold text-center '>
          Learn More About Air Pollution
        </h1>
        <RightNavSummary />
      </div>
    </>
  );
}
