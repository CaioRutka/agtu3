'use client';

import Image from 'next/image';

import { Accordion, AccordionItem } from '@nextui-org/react';

import EdxDiagram from '../../../assets/images/image.jpeg';

export default function ThirdSection() {
  const itemClasses = {
    base: 'py-0 rounded-t-xl py-0 border-b border-b-gray-200',
    title: 'font-montserrat font-bold text-medium',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 h-14 flex items-center',
    indicator: 'text-medium',
    content: 'font-montserrat text-small px-2',
  };

  return (
    <div className="w-full justify-center items-center flex flex-col bg-white">
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-2">
        <div className="w-full justify-center items-center flex flex-col rounded-l-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white rounded-l-full"></div>
            <Image
              src={EdxDiagram}
              alt="Block1"
              className="block mx-auto rounded-l-full py-10"
            />
          </div>
        </div>

        <div className="w-full justify-center items-center flex flex-col pl-4">
          <div className="w-10/12 md:w-full sm:w-full max-w-screen-2xl h-full text-4xl md:text-5xl sm:text-8xl text-[#192335] font-euclid font-bold tracking-tight py-10">
            Affordable Excellence in Digital Business
          </div>
          <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            AGTU's Affordable MBA with Specialization in Digital Business Online
            program revolutionizes access to high-quality education by aligning
            tuition costs with global economic realities. Our innovative pricing
            model, based on the World Bank's Purchasing Power Parity (PPP),
            ensures that students from diverse economic backgrounds can afford a
            top-tier US-based education. The program cost is tailored to the
            average income of each student’s home country, making world-class
            education accessible and affordable.
          </div>
        </div>
      </div>

      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1">
        <div className="w-full justify-center items-center flex flex-col pl-4">
          <div className="w-10/12 md:w-full sm:w-full max-w-screen-2xl h-full text-4xl md:text-5xl sm:text-8xl text-[#192335] font-euclid font-bold tracking-tight py-10">
            Why Choose AGTU's Affordable MBA with Specialization in Digital
            Business Online?
          </div>
          <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            At AGTU, we go beyond affordability to offer a comprehensive and
            supportive educational experience. Here’s why our program provides
            unparalleled value.
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center px-2">
        <div className="w-11/12 max-w-screen-2xl md:w-11/12 sm:w-full justify-center items-center flex flex-col py-2">
          <div className="w-full max-w-screen-2xl">
            <Accordion variant="splitted" itemClasses={itemClasses}>
              <AccordionItem
                key="1"
                aria-label="All-Inclusive Materials"
                title="All-Inclusive Materials"
              >
                Access all required learning materials without additional costs.
                This includes comprehensive resources in both English and
                Portuguese, enhancing your learning experience.
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Graduate Without Debt"
                title="Graduate Without Debt"
              >
                Achieve your academic goals without accumulating burdensome
                debt. Our cost-effective approach allows you to focus on your
                studies and career ambitions.
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Virtual Library Access"
                title="Virtual Library Access"
              >
                Gain unlimited access to our virtual library, enriched with
                extensive resources. Our professional librarian is available to
                assist you in finding precisely what you need, supporting your
                academic success.
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="High-Quality Program"
                title="High-Quality Program"
              >
                Benefit from meticulously designed video lessons that deliver
                engaging and rigorous content, ensuring a deep understanding of
                digital business principles and practices.
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Simple Monthly Tuition"
                title="Simple Monthly Tuition"
              >
                Enjoy the convenience of straightforward monthly payments that
                fit your budget, eliminating financial barriers to your
                educational journey.
              </AccordionItem>
              <AccordionItem
                key="6"
                aria-label="No Hidden Fees"
                title="No Hidden Fees"
              >
                Experience transparency with no unexpected costs. Our tuition
                includes everything you need to succeed, with no surprises.
              </AccordionItem>
            </Accordion>
            <AccordionItem
              key="7"
              aria-label="Partnership Content with edX"
              title="Partnership Content with edX"
            >
              Benefit from our collaboration with edX, offering access to
              high-quality content and courses from world-renowned institutions,
              integrated into your learning experience.
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  );
}
