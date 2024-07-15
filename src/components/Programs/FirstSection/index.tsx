'use client';

import {  Checkbox, cn } from '@nextui-org/react';

export default function FirstSection() {
  return (
    <div className="w-full justify-center items-center flex flex-col bg-white">
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-2">
        <div className="w-full justify-center items-center flex flex-col pl-4">
          <div className="w-10/12 md:w-full sm:w-full max-w-screen-2xl h-full text-4xl md:text-5xl sm:text-8xl text-[#192335] font-euclid font-bold tracking-tight py-10">
            Prestigious Institutions Empowering Your Digital Business Journey
          </div>
          <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            Embark on a transformative educational experience with the
            Affordable MBA with Specialization in Digital Business Online at
            AGTU. Our program is uniquely designed to provide students from
            around the world with the critical skills and knowledge necessary to
            lead and innovate in the fast-evolving digital business landscape.
            By collaborating with renowned institutions globally, we ensure our
            curriculum is enriched with cutting-edge insights and practical
            expertise, preparing graduates to excel in a competitive market.
            Below are the esteemed institutions contributing to the academic
            excellence of our courses:
          </div>
          
        </div>
      </div>
      <div className="w-10/12 md:w-full max-w-screen-2xl text-xl text-[#192335] font-montserrat font-regular tracking-tight grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4 pl-6">
        <div className="py-0 sm:py-6 flex flex-col gap-8">
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            HarvardX
          </Checkbox>
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            RITx
          </Checkbox>
        </div>

        <div className="py-0 sm:py-6  flex flex-col gap-8">
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            DavidsonX
          </Checkbox>
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            University of California
          </Checkbox>
        </div>

        <div className="py-0 sm:py-6  flex flex-col gap-8">
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            EdinburghX
          </Checkbox>
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            Babson College
          </Checkbox>
        </div>

        <div className="py-0 sm:py-6 flex flex-col gap-8">
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            University of Maryland
          </Checkbox>
          <Checkbox
            aria-label={'caio'}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                'inline-flex w-full max-w-md bg-content1',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary',
              ),
              label: 'w-full',
            }}
          >
            Wharton
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
