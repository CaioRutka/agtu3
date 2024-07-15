'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import MenStudy from '../../../assets/images/study-profile.jpg';

export default function HowToGetStarted() {
  return (
    <div className='w-full justify-center items-center flex bg-white'>
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='w-full justify-center items-center flex flex-col'>

          <div className='w-10/12 sm:w-full max-w-screen-2xl bg-white h-full text-5xl sm:text-6xl text-[#192335] font-euclid font-bold tracking-tight py-10'>
            How to Get Started
          </div>
          <div className="w-10/12 sm:w-full max-w-screen-2xl h-full text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            Embarking on your AGTU journey is as simple as it is exciting. Sign up with just a few clicks and start exploring our demo, where you can access world-class education, flexible learning, and a global community. Whether you're looking to advance your career, enrich your knowledge, or connect with like-minded individuals from around the globe, AGTU is your first step towards achieving your goals.
          </div>
          <div className='w-10/12 sm:w-full max-w-screen-2xl h-full text-5xl font-euclid font-bold tracking-tight py-10 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text'>
            Join us Today!
          </div>
          <div className="w-10/12 sm:w-full max-w-screen-2xl h-full text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            Don't miss this unparalleled opportunity to experience education that transcends borders. AGTU University is your passport to a world of learning and opportunity. Discover, learn, and grow with AGTU, where your global educational journey awaits.
          </div>
          <Button
            radius="full"
            className="w-10/12 sm:w-full bg-gradient-to-tr text-xl bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-8 my-10"
          >
            Start Your Free Trial
          </Button>
        </div>

        <div className="w-full bg-blue-400 h-full ml-9 sm:ml-0 justify-center items-center flex flex-col rounded-l-full overflow-hidden relative">
          {/* Container para a imagem */}
          <div className="absolute inset-0 overflow-hidden rounded-l-full">
            <Image
              src={MenStudy} // Verifique se MenStudy é o caminho correto para a sua imagem
              alt="MenStudy"
              layout="fill" // Ocupa todo o espaço do contêiner pai
              objectFit="cover" // Ajusta a imagem para cobrir todo o espaço do contêiner
              className="rounded-l-full hidden sm:block" // Aplica o arredondamento na borda esquerda do contêiner
            />
          </div>
        </div>
      </div>
    </div>
  );
}
