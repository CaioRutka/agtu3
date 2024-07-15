'use client';

import { Avatar } from '@nextui-org/avatar';

import brasil from '../../../assets/images/flags/flag_brasil.jpg';
import eua from '../../../assets/images/flags/flag_eua.png';
import india from '../../../assets/images/flags/flag_india.png';
import italy from '../../../assets/images/flags/flag_italy.jpg';
import korea from '../../../assets/images/flags/flag_koera.jpg';
import spain from '../../../assets/images/flags/flag_spain.jpg';
import SpinningCoin from '../SpinningCoin';

export default function FlagsSection() {
  return (
    <div className="w-full sm:h-full md:h-fit h-full justify-center items-center flex flex-col bg-[#192335] z-20 mt-10">
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full text-5xl sm:text-6xl text-white font-euclid font-bold tracking-tight pt-14">
        Truly Affordable Global Degree Online
      </div>
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full text-2xl sm:text-xl text-white font-montserrat font-regular tracking-tight py-6">
        At AGTU, we provide Affordable Global Degree Online programs designed to
        benefit students worldwide. Our program fees are tailored for each
        country, based on the World Bank's purchasing power parity (PPP),
        ensuring affordability for all.
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-evenly items-center sm:gap-0 gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <Flag name="United States" image={eua.src} price="87" />
          <Flag name="Brazil" image={brasil.src} price="174" />
          <Flag name="Spain" image={spain.src} price="226" />
        </div>
        <div className="flex justify-center items-center">
          <SpinningCoin />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <Flag name="Italy" image={italy.src} price="226" />
          <Flag name="India" image={india.src} price="87" />
          <Flag name="Korea" image={korea.src} price="226" />
        </div>
      </div>

      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full text-5xl sm:text-6xl text-white font-euclid font-bold tracking-tight py-14">
        Don't miss out! Enroll on your Affordable Global Degree Online program
        today.
      </div>
    </div>
  );
}

interface CourseCardProps {
  name: string;
  image: string;
  price: string;
}

const Flag: React.FC<CourseCardProps> = ({ name, image, price }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 p-6 rounded-xl bg-[#1d2a42] drop-shadow shadow-white">
      <Avatar src={image} className="w-24 h-24 text-large" />
      <div className="flex-1 h-full flex flex-col justify-start items-center">
        <div className="text-2xl text-white font-euclid font-bold tracking-tight text-start">
          {name}
        </div>
        <div className=" text-white font-montserrat font-regular tracking-tight text-start">
          Starting at ${price}/month
        </div>
      </div>
    </div>
  );
};
