'use client';

import { useState } from 'react';

import { Button, Input, Link, Select, SelectItem } from '@nextui-org/react';

const courses = [
  {
    key: 'digitalB',
    label:
      'Master Of Business Administration With Specialization In Digital Business',
  },
  {
    key: 'sustB',
    label:
      'Master of Business Administration with specialization in Sustainability',
  },
  { key: 'artinte', label: 'Master of Science in Artificial Intelligence' },
  { key: 'cloudcomp', label: 'Master of Science in Cloud Computing' },
  { key: 'cyber', label: 'Master of Science in Cyber Security' },
  {
    key: 'sustE',
    label:
      'Master of Science in Education with specialization in Sustainability',
  },
  {
    key: 'digitalE',
    label:
      'Master of Science in Education with specialization in Digital Education',
  },
];

const reasons = [
  { key: 'info', label: 'Info about Programs' },
  { key: 'support', label: 'Technical Support' },
  { key: 'enroll', label: 'Enrollment' },
  { key: 'pay', label: 'Payment' },
  { key: 'other', label: 'Other' },
];

export default function GetStarted() {
  const [value, setValue] = useState('');

  return (
    <div className="w-full justify-center items-center flex bg-white">
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-full justify-start items-center flex flex-col">
          <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-6xl text-[#192335] font-euclid font-bold tracking-tight pb-4">
            Get Started
          </div>
          <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-3xl text-[#192335] font-montserrat font-regular tracking-tight">
            Your global carreer awaits you.
          </div>
          <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight mt-8">
            Do you have questions about AGTU?
          </div>

          <Link
            href="#"
            className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl"
          >
            <div className="text-2xl decoration-sky-500 text-sky-500 underline font-montserrat font-regular tracking-tight">
              Get in touch
            </div>
          </Link>
        </div>

        <div className="w-full h-full justify-center items-center flex flex-col">
          <div className="w-10/12 md:w-11/12 sm:w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Your Name*
              </div>
              <Input
                id="name"
                isClearable
                radius="lg"
                classNames={{
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Email*
              </div>
              <Input
                id="search"
                isClearable
                radius="lg"
                classNames={{
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              />
            </div>
          </div>

          <div className="w-10/12 md:w-11/12 sm:w-full grid grid-cols-2 gap-4 py-2">
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Phone*
              </div>
              <Input
                id="search"
                isClearable
                radius="lg"
                classNames={{
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Select your Course*
              </div>
              <Select
                id="course"
                items={courses}
                radius="lg"
                classNames={{
                  base: [
                    'bg-white rounded-xl',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  listbox: ['bg-white'],
                  mainWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              >
                {(course) => (
                  <SelectItem key={course.key}>{course.label}</SelectItem>
                )}
              </Select>
            </div>
          </div>

          <div className="w-10/12 md:w-11/12 sm:w-full grid grid-cols-2 gap-4 py-2">
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Country*
              </div>
              <Input
                id="search"
                isClearable
                radius="lg"
                classNames={{
                  input: [
                    'bg-transparent',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  innerWrapper: 'bg-transparent',
                  inputWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              />
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="text-lg text-[#192335] font-montserrat font-regular tracking-tight mb-2">
                Reason to contact:*
              </div>
              <Select
                id="reasons}"
                items={reasons}
                radius="lg"
                classNames={{
                  base: [
                    'bg-white rounded-xl',
                    'text-black/90 dark:text-white/90',
                    'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                  ],
                  listbox: ['bg-white'],
                  mainWrapper: [
                    'shadow-xl border border-gray-300 dark:border-gray-700 rounded-xl',
                    'bg-default-200/50',
                    'dark:bg-default/60',
                    'backdrop-blur-xl',
                    'backdrop-saturate-200',
                    'hover:bg-default-200/70',
                    'dark:hover:bg-default/70',
                    'group-data-[focus=true]:bg-default-200/50',
                    'dark:group-data-[focus=true]:bg-default/60',
                    '!cursor-text',
                  ],
                }}
              >
                {(reason) => (
                  <SelectItem key={reason.key}>{reason.label}</SelectItem>
                )}
              </Select>
            </div>
          </div>
          <Button
            radius="full"
            className="w-10/12 md:w-11/12 sm:w-full text-xl bg-blue-800 font-montserrat font-medium text-white p-8 my-10"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
