import React from 'react';
import Image from 'next/image';
import faqChart from 'public/faqChart.png';

export default function Chart(props) {
  console.log(props);
  return (
    <>
      <div className='absolute inset-x-0 flex flex-row items-center justify-around w-3/5 m-auto top-3 hover:bg-center md:block sm:block'>
        <Image
          className='h-16 w-fit hover:h-96'
          src={faqChart}
          alt=''
          text='faq chart'
        />
      </div>
    </>
  );
}
