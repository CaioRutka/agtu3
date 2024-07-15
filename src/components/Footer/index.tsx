'use client';

import Image from 'next/image';

import logoFotter from '../../assets/images/agtu-seal.svg';

import {
  Link,
} from '@nextui-org/react';

export default function Footer() {
  return (
    <div className="w-full justify-center items-center flex bg-[#051e4f] pt-8 pb-20">
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-6 gap-4">
        <Image src={logoFotter} alt="Logo" className='pr-6'/>

        <div className="gap-1 h-full">
          <Link className="w-full text-3xl text-white font-euclid font-bold tracking-tight mb-4">
            Our Degrees
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            MBA in Digital Business Online
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            MBA Online
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Master's Degree in Cybersecurity
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Master's Degree in Cloud Computing
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Master's Degree in Artificial Intelligence
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Master's Degree in Digital Education
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Master's Degree in Education
          </Link>
        </div>

        <div className="gap-1 h-full">
          <Link className="w-full text-3xl text-white font-euclid font-bold tracking-tight mb-4">
            About Us
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Founders
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Authorization
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Faculty
          </Link>
        </div>

        <div className="gap-1 h-full">
          <div className="w-full text-3xl text-white font-euclid font-bold tracking-tight mb-4">
            Links
          </div>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            FAQ
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Code of Conduct
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Contact
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Enroll
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Catalog
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Professors
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Authorization
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Child Protection Policy
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Privacy Policy
          </Link>
        </div>

        <div className="gap-1 h-full">
          <div className="w-full text-3xl text-white font-euclid font-bold tracking-tight mb-4">
            Contact Us
          </div>
          <div className="w-full text-xl text-white font-montserrat font-regular tracking-tight">
            +1 (407) 738-9203
          </div>

          <div className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            contact@agtu.net
          </div>
          <div className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            6900 Tavistock Lakes BLVD, Suíte 400 Orlando, FL 32827
          </div>
        </div>

        <div className="gap-1 h-full">
          <div className="w-full text-3xl text-white font-euclid font-bold tracking-tight mb-2">
            Languages
          </div>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            English
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Spanish
          </Link>
          <Link className="w-full text-md text-white font-montserrat font-regular tracking-tight">
            Portuguese
          </Link>
        </div>
      </div>
    </div>
  );
}
