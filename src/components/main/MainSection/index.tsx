'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import {useTranslations} from 'next-intl';

import EdxDiagram from '../../../assets/images/edx-diagram.png';
import Edx from '../../../assets/images/edx.svg';
import Shape1 from '../../../assets/images/shape-1.png';
import Shape2 from '../../../assets/images/shape-2.png';
import Shape3 from '../../../assets/images/shape-3.png';

const items = ['create', 'elevate', 'simplify', 'automate'];
const interval = 3000;

export default function MainSection() {
  const translate = useTranslations('Home');
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [items.length, interval]);

  return (
    <div className="overflow-hidden">
      <div
        className={
          'bg-gradient-to-r from-blue-200 via-blue-200 to-red-200 h-[2100px] md:h-[750px] lg:h-[900px] sm:h-screen mb-[100px] sm:mb-[200px] flex items-start justify-center relative sm:py-0 py-16 pb-96'
        }
      >
        <Image
          placeholder="blur"
          src={Shape1}
          alt="Logo"
          className="absolute block mx-auto left-0 top-1/2 z-0"
          style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
        />
        <Image
          placeholder="blur"
          src={Shape2}
          alt="Logo"
          className="absolute top-0 right-0 z-0"
          style={{ transform: 'translate(0%, 0%)' }}
        />
        <Image
          placeholder="blur"
          src={Shape3}
          alt="Logo"
          className="absolute top-0 right-0"
          style={{ transform: 'translate(-40%, 0%)' }}
        />
        <Image
          placeholder="blur"
          src={Shape3}
          alt="Logo"
          className="absolute top-0 right-0"
          style={{ transform: 'translate(-20%, 0%)' }}
        />

        <div className="w-full md:w-11/12 justify-between flex flex-col sm:flex-row p-4 max-w-screen-2xl">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center max-width-3xl sm:mb-0 mb-12">
            <div className="w-full text-3xl sm:text-2xl text-start text-[#192335] font-euclid max-width-3xl mb-8 z-10 tracking-tight">
              {translate('pretitle')}
            </div>
            <h1 className="w-full text-6xl md:text-7xl sm:text-8xl text-start text-[#192335] font-euclid font-bold max-width-3xl z-10 tracking-tight">
              {translate('title')}
            </h1>
            <div className="w-full text-lg sm:text-xl text-start text-[#192335] font-montserrat max-width-3xl mt-16 z-10">
              {translate('subtitle')}
            </div>
          </div>
          <div className="relative w-full sm:w-1/2 text-6xl text-start text-[#192335] font-euclid font-bold max-width-3xl z-10">
            <Image src={EdxDiagram} alt="EdxDiagram" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={Edx}
                alt="Block1"
                className="block mx-auto"
                style={{ maxWidth: '60%', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>  

        <div className={'w-10/12 md:w-11/12 sm:w-full sm:h-[280px] rounded-2xl absolute bottom-[-40px] md:bottom-[-140px] lg:bottom-[-40px] z-20 max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-4'}>
          <div className={'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>
              <div className={'text-xl text-start text-[#192335] font-euclid font-bold mt-4'}>
                Top Professors in the World
              </div>
            </div>
            <div className={'text-sm text-start text-[#192335] font-montserrat font-regular'}>
              Best professors from Harvard, MIT, Berkeley, Oxford, and many others to teach your program.
            </div>
          </div>

          <div className={'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="m15.46 18.12l1.42 1.42L19 17.41l2.12 2.13l1.42-1.42L20.41 16l2.13-2.12l-1.42-1.42L19 14.59l-2.12-2.13l-1.42 1.42L17.59 16m-2.62-4.38C14.86 10.28 13.58 8.97 12 9c-1.7.04-3 1.3-3 3s1.3 2.94 3 3c.39 0 .77-.08 1.14-.23c.27-1.1.72-2.14 1.83-3.15M13 16H7c0-1.1-.9-2-2-2v-4c1.1 0 2-.9 2-2h10c0 1.1.9 2 2 2v.05c.67.01 1.34.13 2 .35V6H3v12h10.32a6.4 6.4 0 0 1-.32-2"/></svg>
            <div className={'text-xl text-start text-[#192335] font-euclid font-bold mt-4'}>
              Free Professional Courses
            </div>
            </div>
            <div className={'text-sm text-start text-[#192335] font-montserrat font-regular'}>
              Enroll in our Affordable Global Degree Online programs to access a wide range of Professional Development Courses from top universities.
            </div>
          </div>

          <div className={'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'}>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32s.85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.48 2.48 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1"/></svg>
              <div className={'text-xl text-start text-[#192335] font-euclid font-bold mt-4'}>
                Affordable for Everyone
              </div>
            </div>
            <div className={'text-sm text-start text-[#192335] font-montserrat font-regular'}>
              AGTU provides Affordable Global Degree Online programs, pricing courses based on World Bank purchasing power parity (PPP).
            </div>
          </div>

          <div className={'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>
              <div className={'text-xl text-start text-[#192335] font-euclid font-bold mt-4'}>
                Top Professors in the World
              </div>
            </div>
            <div className={'text-sm text-start text-[#192335] font-montserrat font-regular'}>
              Best professors from Harvard, MIT, Berkeley, Oxford, and many others to teach your program.
            </div>
          </div>
        </div>

        <div
          className={'bg-white w-[1000px] sm:w-[3000px] mb-[-800px] h-screen items-center justify-center absolute bottom-0 rounded-t-full sm:flex z-10 max-width-screen'}
        ></div>
      </div>
    </div>
  );
}
