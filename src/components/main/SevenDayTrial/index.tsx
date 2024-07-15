'use client';
import { Button, Checkbox, cn } from '@nextui-org/react';

export default function SevenDayTrial() {
  return (
    <div className='w-full justify-center items-center flex bg-white'>
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-4">  <div className='w-full justify-center items-center flex flex-col'>
        <div className='w-10/12 md:w-full sm:w-full max-w-screen-2xl bg-white h-full text-5xl sm:text-6xl text-[#192335] font-euclid font-bold tracking-tight py-10'>
          Affordable pricing for everyone.
        </div>
        <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
          When you enroll in any of our Affordable Global Degree Online programs you will enjoy a 7-day trial that lets you dive into the world of online learning with no commitments or card information.
        </div>
        <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6 flex flex-col gap-8">
          <Checkbox
            aria-label={"caio"}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                "inline-flex w-full max-w-md bg-content1",
                "hover:bg-content2 items-center justify-start",
                "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                "data-[selected=true]:border-primary",
              ),
              label: "w-full",
            }}
          >
            Free for 7 days
          </Checkbox>
          <Checkbox
            aria-label={"caio"}
            isReadOnly
            isSelected
            classNames={{
              base: cn(
                "inline-flex w-full max-w-md bg-content1",
                "hover:bg-content2 items-center justify-start",
                "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                "data-[selected=true]:border-primary",
              ),
              label: "w-full",
            }}
          >
            No credit card required
          </Checkbox>
        </div>
      </div>
        <div className='w-full h-full justify-center items-center flex flex-col'>

          <div className='flex flex-row w-10/12 md:w-11/12 sm:w-full pt-10 pb-1'>
            <div className="max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight">
              Starting at
            </div>
            <div className='line-through pl-2 max-w-screen-2xl bg-white text-2xl text-red-400 font-montserrat font-medium tracking-tight pb-1'>
              $ 226
            </div>
          </div>
          <div className='w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl bg-white text-6xl text-[#192335] font-montserrat font-medium tracking-tight pb-1'>
            $ 0
          </div>
          <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight pb-6">
            per month
          </div>
          <div className="w-10/12 md:w-11/12 sm:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            This is your risk-free opportunity to experience the world's best professors from leading global academic institutions.
          </div>
          <Button
            radius="full"
            className="w-10/12 md:w-11/12 bg-gradient-to-tr text-xl bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-8 my-10"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
