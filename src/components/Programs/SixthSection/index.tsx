'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import businessAnalyst from '../../../assets/images/careers/business-analyst.jpeg';
import ChiefDigitalOfficer from '../../../assets/images/careers/chief-digital-officer.jpeg';
import dataAnalyst from '../../../assets/images/careers/data-analyst.jpeg';
import digitalMarketingManager from '../../../assets/images/careers/digital-marketing-manager.jpeg';
import ecommerceMarketingManager from '../../../assets/images/careers/ecommerce-martketing-manager.jpeg';
import entrepreneur from '../../../assets/images/careers/entrepreneur.jpeg';
import PM from '../../../assets/images/careers/product-manager.jpeg';
import SEO from '../../../assets/images/careers/seo-specialist.jpeg';

export default function SixthSection() {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div
        className={
          'w-10/12 md:w-11/12 sm:w-full rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-4 px-4'
        }
      >
        <CareerCard
          imgSrc={digitalMarketingManager}
          title="Digital Marketing Manager"
          description="Lead and strategize digital marketing campaigns to drive brand awareness and customer engagement."
          salary="$80,000 - $130,000"
        />

        <CareerCard
          imgSrc={ecommerceMarketingManager}
          title="E-commerce Manager"
          description="Oversee online sales platforms, optimize user experiences, and implement strategies to boost online sales"
          salary="$75,000 - $120,000"
        />

        <CareerCard
          imgSrc={ChiefDigitalOfficer}
          title="Chief Digital Officer (CDO)"
          description="Guide organizations through digital transformations, implementing innovative technologies and digital strategies."
          salary="$150,000 - $250,000+ "
        />

        <CareerCard
          imgSrc={businessAnalyst}
          title="Business Analyst"
          description="Analyze data to provide insights and recommendations that enhance business performance and decision-making"
          salary="$65,000 - $110,000"
        />

        <CareerCard
          imgSrc={entrepreneur}
          title="Entrepreneur"
          description="Launch and grow your own digital business, leveraging your comprehensive understanding of digital business models and strategies."
          salary="Income varies"
        />

        <CareerCard
          imgSrc={PM}
          title="Product Manager"
          description="Develop and manage digital products from conception to launch, ensuring they meet market needs and business goals."
          salary="$85,000 - $140,000 "
        />

        <CareerCard
          imgSrc={dataAnalyst}
          title="Digital Consultant"
          description=" Advise businesses on digital strategies, helping them to navigate the complexities of the digital world."
          salary="$85,000 - $140,000"
        />

        <CareerCard
          imgSrc={SEO}
          title="SEO Specialist"
          description="Optimize websites to improve their search engine rankings and drive organic traffic. "
          salary="$60,000 - $100,000"
        />
      </div>
    </div>
  );
}

interface CourseCardProps {
  title: string;
  description: string;
  salary: string;
  imgSrc: StaticImageData;
}

const CareerCard: React.FC<CourseCardProps> = ({ title, description, salary, imgSrc }) => {
  return (

    <div
      className={
        'bg-white w-full h-full rounded-2xl sm:rounded-2xl shadow-2xl justify-center items-center flex flex-col'
      }
    >
      <Image
        className="rounded-t-2xl sm:rounded-t-2xl"
        src={imgSrc}
        alt="Logo"
      />
      <div className='w-full h-full justify-between items-center flex flex-col'>

        <div
          className={
            'w-full text-xl text-start text-[#192335] font-euclid font-bold p-4'
          }
        >
          {title}
        </div>
        <div
          className={
            'w-full text-sm text-start text-[#192335] font-montserrat font-regular p-4'
          }
        >
          {description}
        </div>
        <div
          className={
            'w-full text-sm text-start text-[#192335] font-montserrat font-regular p-4'
          }
        >
          Salary Expectation
        </div>
        <div
          className={
            'w-full text-sm text-start text-[#192335] font-montserrat font-regular p-4'
          }
        >
          {salary} per year.
        </div>
      </div>
    </div>
  );
}
