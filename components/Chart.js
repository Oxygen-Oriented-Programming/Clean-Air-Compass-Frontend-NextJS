import React from 'react';
import Image from 'next/image';
import faqChart from 'public/faqChart.png';

export default function Chart(props) {
  console.log(props);
  return (
    <>
      <div className='absolute flex flex-row items-center justify-around right-56 top-5 md:block sm:block'>
        <Image
          className='h-14 w-fit hover:h-96'
          src={faqChart}
          alt=''
          text='faq chart'
        />
      </div>
    </>
  );
}
