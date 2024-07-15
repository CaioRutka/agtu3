'use client';

import { StaticImageData } from 'next/image';

import Image from 'next/image';

import { Button } from '@nextui-org/react';

interface CourseCardProps {
  title: string;
  cp_one: string;
  cp_two: string; // Assuming cp_two is also a string, adjust if it's a different type
  cp_three: string;
  cp_four: string;
  imgSrc: StaticImageData;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, cp_one, cp_two, cp_three, cp_four, imgSrc }) => {
  return (

    <div
      className={
        'bg-gray-200 h-full rounded-2xl p-8 shadow-2xl justify-between items-start flex flex-col'
      }
    >
      <div>
        <Image
          className="rounded-2xl"
          src={imgSrc}
          alt="Logo"
        />
        <div
          className={
            'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
          }
        >
          {title}
        </div>
        <div
          className={
            `text-lg text-start text-black font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center`
          }
        >
          Content Providers:
        </div>

        <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
          <div className={'h-fit w-full bg-gradient-to-br from-gray-500 to-gray-700 border-xl border-white/50 shadow-pink-500/30 rounded-full p-2'}>
            <div className='text-white text-sm sm:text-md font-montserrat font-medium text-center'>
              {cp_one}
            </div>
          </div>
          <div className={'h-fit w-full bg-gradient-to-br from-gray-500 to-gray-700 border-xl border-white/50 shadow-pink-500/30 rounded-full p-2'}>
            <div className='text-white text-sm sm:text-md font-montserrat font-medium text-center'>
              {cp_two}
            </div>
          </div>
        </div>
        <div className={'grid grid-cols-2 gap-4 mb-6'}>
          <div className={`${cp_three === '-' ? 'bg-transparent' : 'bg-gradient-to-br from-gray-500 to-gray-700'} h-fit w-full border-xl border-white/50 shadow-pink-500/30 rounded-full p-2`}>
            <div className='text-white text-sm sm:text-md font-montserrat font-medium text-center'>
              {cp_three}
            </div>
          </div>
          <div className={`${cp_four === '-' ? 'bg-transparent' : 'bg-gradient-to-br from-gray-500 to-gray-700'} h-fit w-full border-xl border-white/50 shadow-pink-500/30 rounded-full p-2`}>
            <div className='text-white text-sm sm:text-md font-montserrat font-medium text-center'>
              {cp_four}
            </div>
          </div>
        </div>

        <Button
          radius="full"
          className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
        >
          Know More
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
