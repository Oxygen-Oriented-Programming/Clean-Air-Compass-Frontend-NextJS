import React from 'react';
import RightNavSummary from './RightNavSummary';
import Link from 'next/link';

export default function RightNavTitle() {
  return (
    <>
      <Link
        href='https://molekule.com/blog/what-is-pm-2-5-and-how-can-you-reduce-your-exposure/'
        target='_blank'
      >
        <div className='flex flex-col p-5 text-center transition-all bg-black h-fit '>
          <h1 className='text-3xl font-bold text-center hover:text-violet-500'>
            Learn More About Air Pollution
          </h1>
          <RightNavSummary />
        </div>
      </Link>
    </>
  );
}
