'use client';

import Image from 'next/image';

import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import currentCourse from '../../../assets/images/Administration-with-specialization-in-Digital-Business.jpg';
import califa from '../../../assets/images/califa.png';
import cata from '../../../assets/images/cata.png';
import david from '../../../assets/images/david.png';
import edin from '../../../assets/images/edin.png';
import harvard from '../../../assets/images/Harvard-Logo.png';
import mary from '../../../assets/images/mary.png';

export default function MainSection() {
  const translate = useTranslations('Home');

  return (
    <div className="">
      <div
        className={
          'bg-gradient-to-r from-blue-200 via-blue-200 to-red-200 h-full sm:h-[600px] flex items-start justify-center'
        }
      >
        <div className="w-full md:w-11/12 justify-between flex flex-col sm:flex-row p-4 max-w-screen-2xl">
          <div className="w-full sm:w-1/2 flex flex-col justify-start items-center max-width-3xl sm:mb-0 my-6 sm:my-32">
            <h1 className="w-full text-4xl md:text-5xl sm:text-8xl text-start text-[#192335] font-euclid font-bold max-width-3xl z-10 tracking-tight">
              Affordable MBA with Specialization in Digital Business Online
            </h1>
            <div className="w-full text-lg sm:text-xl text-start text-[#192335] font-montserrat max-width-3xl mt-8 z-10">
              A dynamic and cutting-edge program designed to propel you to the
              forefront of the digital economy.
            </div>
            <div className="grid-cols-2 sm:grid-cols-4 gap-8 my-10 hidden sm:grid">
              <div className="w-full flex justify-center items-center p-5">
                <Image src={harvard} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={mary} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={cata} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={califa} alt="Logo" />
              </div>
            </div>
          </div>

          <div className="w-full h-full sm:w-1/2 justify-center items-center flex text-start text-[#192335] max-width-3xl z-10 my-10">
            <div
              className={
                'bg-white w-full h-full sm:w-2/3 rounded-2xl sm:rounded-2xl shadow-2xl justify-center items-center flex flex-col p-2'
              }
            >
              <Image
                className="rounded-t-2xl sm:rounded-t-2xl"
                src={currentCourse}
                alt="Logo"
              />
              <div className="flex flex-row w-10/12 md:w-11/12 sm:w-full pt-5 pb-1">
                <div className="max-w-screen-2xl text-md text-[#192335] font-montserrat font-regular tracking-tight">
                  Starting at
                </div>
                <div className="line-through pl-2 max-w-screen-2xl bg-white text-md text-red-400 font-montserrat font-regular tracking-tight pb-1">
                  $ 226
                </div>
              </div>
              <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white text-4xl text-[#192335] font-montserrat font-bold tracking-tight pb-1">
                $ 0
              </div>
              <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight pb-6">
                per month
              </div>
              <Button
                radius="md"
                className="w-10/12 md:w-11/12 text-xl bg-white hover:bg-blue-200 font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6 my-2"
              >
                Get it
              </Button>
              <div className="items-center text-center w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-md text-[#192335] font-montserrat font-regular tracking-tight pb-6">
                Try it for free for 7 days
              </div>

              <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] font-montserrat font-semibold tracking-tight pb-6">
                The Program:
              </div>

              <div className="justify-start gap-4 w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] tracking-tight flex flex-row mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 9.9V8.2q.825-.35 1.688-.525T17.5 7.5q.65 0 1.275.1T20 7.85v1.6q-.6-.225-1.213-.337T17.5 9q-.95 0-1.825.238T14 9.9m0 5.5v-1.7q.825-.35 1.688-.525T17.5 13q.65 0 1.275.1t1.225.25v1.6q-.6-.225-1.213-.338T17.5 14.5q-.95 0-1.825.225T14 15.4m0-2.75v-1.7q.825-.35 1.688-.525t1.812-.175q.65 0 1.275.1T20 10.6v1.6q-.6-.225-1.213-.338T17.5 11.75q-.95 0-1.825.238T14 12.65M6.5 16q1.175 0 2.288.263T11 17.05V7.2q-1.025-.6-2.175-.9T6.5 6q-.9 0-1.788.175T3 6.7v9.9q.875-.3 1.738-.45T6.5 16m6.5 1.05q1.1-.525 2.213-.787T17.5 16q.9 0 1.763.15T21 16.6V6.7q-.825-.35-1.713-.525T17.5 6q-1.175 0-2.325.3T13 7.2zM12 20q-1.2-.95-2.6-1.475T6.5 18q-1.05 0-2.062.275T2.5 19.05q-.525.275-1.012-.025T1 18.15V6.1q0-.275.138-.525T1.55 5.2q1.15-.6 2.4-.9T6.5 4q1.45 0 2.838.375T12 5.5q1.275-.75 2.663-1.125T17.5 4q1.3 0 2.55.3t2.4.9q.275.125.413.375T23 6.1v12.05q0 .575-.487.875t-1.013.025q-.925-.5-1.937-.775T17.5 18q-1.5 0-2.9.525T12 20m-5-8.35"
                  />
                </svg>
                <div className="max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight">
                  Completion within 18 months.
                </div>
              </div>

              <div className="justify-start gap-4 w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] tracking-tight flex flex-row mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 0l3-2m-3-3v5"
                  />
                </svg>
                <div className="max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight">
                  Total of 36 credit hours
                </div>
              </div>

              <div className="justify-start gap-4 w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] tracking-tight flex flex-row mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M18 10a4 4 0 0 1 3 6.646v4.192a1.1 1.1 0 0 1-1.592.984L18 21.118l-1.408.704A1.1 1.1 0 0 1 15 20.838v-4.192A4 4 0 0 1 18 10m2-6a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h8a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-1 13.874a4 4 0 0 1-2 0v1.508l.553-.276a1 1 0 0 1 .894 0l.553.276zM18 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-9 1a1 1 0 0 1 .117 1.993L9 15H7a1 1 0 0 1-.117-1.993L7 13zm4-4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z"
                    />
                  </g>
                </svg>
                <div className="max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight">
                  Bachelor’s Degree required.
                </div>
              </div>

              <div className="justify-start gap-4 w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] tracking-tight flex flex-row mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.934 8.965A8.002 8.002 0 0 0 1 10c0 1.892.657 3.631 1.756 5.001C3.564 16.01 4 17.125 4 18.306V22h9l.001-3H15a2 2 0 0 0 2-2v-2.929l1.96-.84c.342-.146.372-.494.224-.727zM3 10a6 6 0 0 1 11.95-.779l.057.442l1.543 2.425l-1.55.664V17h-3.998L11 20H6v-1.694c0-1.639-.591-3.192-1.685-4.556A5.97 5.97 0 0 1 3 10m18.154 8.102l-1.665-1.11A8.96 8.96 0 0 0 21 12a8.96 8.96 0 0 0-1.51-4.993l1.664-1.11A10.95 10.95 0 0 1 23 12c0 2.258-.68 4.356-1.846 6.102"
                  />
                </svg>
                <div className="max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight">
                  English and Portuguese.
                </div>
              </div>

              <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-xl text-[#192335] font-montserrat font-semibold tracking-tight my-6">
                Your Future, Our Mission.
              </div>

              <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-6">
                Why Choose AGTU's Affordable MBA with Specialization in Digital
                Business Online? 
                At AGTU, we go beyond affordability to offer a
                comprehensive and supportive educational experience
              </div>              
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex sm:hidden flex-col justify-start items-center max-width-3xl sm:mb-0 my-8 sm:my-32">
            <div className="grid-cols-3 sm:grid-cols-4 gap-8 my-10 grid">
              <div className="w-full flex justify-center items-center p-5">
                <Image src={harvard} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={mary} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={cata} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={califa} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={edin} alt="Logo" />
              </div>
              <div className="w-full flex justify-center items-center p-5">
                <Image src={david} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
