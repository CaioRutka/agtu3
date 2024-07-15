'use client';
import { Tab, Tabs } from '@nextui-org/react';
import CourseCard from '../../CourseCard'

import adm1 from '../../../assets/images/Administration-with-specialization-in-Digital-Business.jpg';
import adm2 from '../../../assets/images/Administration-with-specialization-in-Sustainability.jpg';

import tech1 from '../../../assets/images/Artificial-Intelligence-bk.jpg';
import tech2 from '../../../assets/images/Cloud-Computing.jpg';
import tech3 from '../../../assets/images/Cyber-Security-bk.jpg';

import edu1 from '../../../assets/images/Education-with-specialization-in-Digital-Education.jpg';
import edu2 from '../../../assets/images/Education-with-specialization-in-Sustainability.jpg';

export default function ProgramsSection() {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col bg-white">
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white h-full text-4xl sm:text-6xl text-[#192335] font-euclid font-bold tracking-tight py-4">
        Our Affordable Global Degree Online Programs
      </div>
      <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white h-full text-xl text-[#192335] font-montserrat font-regular tracking-tight">
        Boost your career prospects
      </div>

      <div className="flex w-10/12 md:w-11/12 sm:w-full flex-col max-w-screen-2xl pt-10 ">
        <Tabs
          fullWidth
          size="lg"
          aria-label="Tabs form"
          color="primary"
          classNames={{
            tabList:
              'gap-6 w-full relative rounded-none p-0 hide-scrollbar max-w-sm sm:max-w-full',
            cursor: 'w-full bg-[#192335] p-4 rounded-2xl',
            tab: 'max-w-fit h-12',
            tabContent: 'group-data-[selected=true]:text-white',
          }}
        >
          <Tab
            key="all"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium tracking-tight">
                  All Courses
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 md:sm:grid-cols-3 sm:grid-cols-4 gap-8 mt-8'
              }
            >
              <CourseCard title={'Masters Degree in Business Administration with a specialization in Digital Business'} cp_one={'edX'} cp_two={'AGTU'} cp_three={'-'} cp_four={'-'} imgSrc={adm1} />
              <CourseCard title={'Masters Degree in Business Administration with a specialization in Sustainability'} cp_one={'edX'} cp_two={'AGTU'} cp_three={'-'} cp_four={'-'} imgSrc={adm2} />

              <CourseCard title={'Masters Degree in Cloud Computing'} cp_one={'Harvard University'} cp_two={'The Linux Foundation'} cp_three={'IBM'} cp_four={'Amazon Web Services'} imgSrc={tech1} />
              <CourseCard title={'Masters Degree in Cybersecurity'} cp_one={'Harvard University'} cp_two={'University of Maryland'} cp_three={'IBM'} cp_four={'Amazon Web Services'} imgSrc={tech2} />
              <CourseCard title={'Masters Degree in Artificial Intelligence'} cp_one={'Harvard University'} cp_two={'The Linux Foundation'} cp_three={'IBM'} cp_four={'Babson College'} imgSrc={tech3} />

              <CourseCard title={'Masters Degree in Education with specialization in Digital Education'} cp_one={'edX'} cp_two={'University of Helsinki'} cp_three={'AGTU'} cp_four={'-'} imgSrc={edu1} />
              <CourseCard title={'Masters Degree in Education with specialization in Sustainability'} cp_one={'edX'} cp_two={'University of Helsinki'} cp_three={'AGTU'} cp_four={'-'} imgSrc={edu2} />
            </div>
          </Tab>
          <Tab
            key="technology"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Technology
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-8 mt-8'
              }
            >
              <CourseCard title={'Masters Degree in Cloud Computing'} cp_one={'Harvard University'} cp_two={'The Linux Foundation'} cp_three={'IBM'} cp_four={'Amazon Web Services'} imgSrc={tech1} />
              <CourseCard title={'Masters Degree in Cybersecurity'} cp_one={'Harvard University'} cp_two={'University of Maryland'} cp_three={'IBM'} cp_four={'Amazon Web Services'} imgSrc={tech2} />
              <CourseCard title={'Masters Degree in Artificial Intelligence'} cp_one={'Harvard University'} cp_two={'The Linux Foundation'} cp_three={'IBM'} cp_four={'Babson College'} imgSrc={tech3} />
            </div>
          </Tab>
          <Tab
            key="education"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Education
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-8 mt-8'
              }
            >
              <CourseCard title={'Masters Degree in Education with specialization in Digital Education'} cp_one={'edX'} cp_two={'University of Helsinki'} cp_three={'AGTU'} cp_four={'-'} imgSrc={edu1} />
              <CourseCard title={'Masters Degree in Education with specialization in Sustainability'} cp_one={'edX'} cp_two={'University of Helsinki'} cp_three={'AGTU'} cp_four={'-'} imgSrc={edu2} />
            </div>
          </Tab>
          <Tab
            key="business"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Business
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-8 mt-8'
              }
            >
              <CourseCard title={'Masters Degree in Business Administration with a specialization in Digital Business'} cp_one={'edX'} cp_two={'AGTU'} cp_three={'-'} cp_four={'-'} imgSrc={adm1} />
              <CourseCard title={'Masters Degree in Business Administration with a specialization in Sustainability'} cp_one={'edX'} cp_two={'AGTU'} cp_three={'-'} cp_four={'-'} imgSrc={adm2} />

            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
