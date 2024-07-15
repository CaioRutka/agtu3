'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

import amazon from '../../../assets/images/amazon-logo.png';
import microsoft from '../../../assets/images/Microsoft-Logo.png';
import vised from '../../../assets/images/vised-logo.png';

export default function OurPartners() {
  return (
    <div className="w-full sm:h-full md:h-fit h-full justify-center items-center flex flex-col bg-white z-20">
      <div className='w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white h-full text-6xl text-[#192335] font-euclid font-bold tracking-tight py-10'>
        Our Partners
      </div>
      <div className='flex flex-col sm:flex-row w-10/12 justify-between items-center'>

      <Image
        className="rounded-2xl"
        src={amazon}
        alt="Logo"
        style={{ maxWidth: '30%', width: '100%', height: 'auto' }}
      />
      <Image
        className="rounded-2xl"
        src={microsoft}
        alt="Logo"
        style={{ maxWidth: '30%', width: '100%', height: 'auto' }}
      />
      <Image
        className="rounded-2xl"
        src={vised}
        alt="Logo"
        style={{ maxWidth: '30%', width: '100%', height: 'auto' }}
      />

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
