import React from 'react';
import Image from 'next/image';
import faqChart from 'public/faqChart.png';

export default function Chart(props) {
  return (
    <>
      <div className='fixed flex flex-row items-center justify-around right-56 top-5'>
        <Image
          className='h-14 w-fit hover:h-[30rem] hover:w-auto'
          src={faqChart}
          alt=''
          text='faq chart'
        />
      </div>
    </>
  );
}
