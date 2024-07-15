'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';

export default function SevenReasons() {
  const itemClasses = {
    base: 'py-0 bg-gray-200 rounded-xl py-4',
    title: 'font-montserrat font-bold text-medium',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center',
    indicator: 'text-medium',
    content: 'font-montserrat text-small px-2',
  };
  
  return (
    <div className="w-full sm:h-full md:h-fit h-full justify-center items-center flex flex-col bg-white z-20 mb-10">
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white h-full text-6xl text-[#192335] font-euclid font-bold tracking-tight pt-10 pb-2">
        Seven Reasons
      </div>
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl h-full text-2xl sm:text-xl text-[#192335] font-montserrat font-regular tracking-tight pb-10">
        Why Should you Choose do get your Affordable Global Degree Online with
        AGTU
      </div>
      <div className="w-10/12 md:w-10/12 sm:w-full max-w-screen-2xl">
        <Accordion variant="splitted" itemClasses={itemClasses}>
          <AccordionItem
            key="1"
            aria-label="AWorld-Class Education"
            title="World-Class Education"
          >
            AGTU offers an affordable global degree online, providing access to
            the best professors from top universities like Harvard, MIT,
            Berkeley, and Oxford. By partnering with edX, our premier content
            provider, we ensure that our students receive the highest quality
            education from the most respected institutions worldwide. With AGTU,
            you can gain knowledge and skills that are recognized and valued by
            employers globally, setting you up for success in your chosen career
            path.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Flexible Learning"
            title="Flexible Learning"
          >
            Our affordable global degree online programs are designed to fit
            your lifestyle and learning preferences. You can study at your own
            pace, from anywhere in the world, without having to put your life on
            hold. Our cutting-edge online learning platform provides engaging
            and interactive content, allowing you to acquire real-world skills
            that boost your confidence and performance. With AGTU, you have the
            freedom to learn on your terms while earning a prestigious degree.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Professional Development Opportunities"
            title="Professional Development Opportunities"
          >
            In addition to our affordable global degree online, AGTU offers
            unlimited access to free professional development courses. These
            courses, offered by the world's best universities, allow you to
            explore topics aligned with your interests and career goals. By
            completing these courses, you'll receive official certificates from
            the providing institutions, demonstrating your commitment to
            continuous learning and enhancing your professional profile.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Global Community"
            title="Global Community"
          >
            When you enroll in our affordable global degree online, you become
            part of a vibrant, diverse, and inclusive online community. You'll
            have the opportunity to connect with students from around the world,
            fostering valuable relationships and expanding your global network.
            AGTU is more than just a university; it's a global community of
            passionate learners shaping the future through innovation and
            collaboration.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Affordable Education for All"
            title="Affordable Education for All"
          >
            We believe that everyone should have access to quality education,
            regardless of their financial situation. That's why we offer an
            affordable global degree online using an innovative pricing model
            based on the World Bank's purchasing power parity (PPP). By
            adjusting the cost of our programs to the economic realities of each
            country, we ensure that our degrees are accessible and affordable
            for students worldwide.
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Career Advancement"
            title="Career Advancement"
          >
            An affordable global degree online from AGTU can be a game-changer
            for your career. Our programs are designed to equip you with the
            knowledge and skills that employers value, making you a competitive
            candidate in the global job market. With a degree from AGTU, you'll
            have the credentials and expertise to pursue new opportunities, take
            on leadership roles, and earn a higher salary.
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Free Trial and No Commitments"
            title="Free Trial and No Commitments"
          >
            We are confident in the value of our affordable global degree online
            programs, which is why we offer a 7-day free trial. This trial
            allows you to explore our courses, experience our online learning
            platform, and engage with our global community without any
            commitments or upfront costs. We want you to be certain that AGTU is
            the right choice for you before making any financial investment in
            your education.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
