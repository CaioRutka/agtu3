'use client';
import { Button } from '@nextui-org/react';

export default function WhyUs() {
  return (
    <div className="w-full sm:h-full md:h-fit h-full justify-center items-center flex flex-col bg-white z-20">
      <div className='w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white h-full text-5xl sm:text-6xl text-[#192335] font-euclid font-bold tracking-tight py-10'>
        Why Us
      </div>
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
        Why Us
      </div>
      {/* <Button
          radius="full"
          className="w-10/12 bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-8 my-10"
        >
          Start Your Free Trial
        </Button> */}
    </div>
  );
}
