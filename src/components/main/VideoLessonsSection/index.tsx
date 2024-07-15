'use client';

import SpinningCoin from '../SpinningCoin';

export default function VideoLessonSection() {
  return (
    <div className="w-full sm:h-full md:h-fit h-full justify-center items-center flex flex-col bg-blue-300 z-20 mt-10">
      <div className="w-10/12 sm:w-full max-w-screen-2xl h-full text-6xl text-[#192335] font-euclid font-bold tracking-tight py-14">
        Truly Affordable Global Degree Online
      </div>

      <div className="justify-center items-center text-white font-bebas text-light text-4xl sm:text-5xl">
        <SpinningCoin />
      </div>
    </div>
  );
}
