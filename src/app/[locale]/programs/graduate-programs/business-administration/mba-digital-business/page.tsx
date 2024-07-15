'use client';

import NavBar from '@/components/NavBar';
import MainSection from '@/components/Programs/MainSection';
import FirstSection from '@/components/Programs/FirstSection';
import SecondSection from '@/components/Programs/SecondSection';
import ThirdSection from '@/components/Programs/ThirdSection';
import FourthSection from '@/components/Programs/FourthSection';
import FifthSection from '@/components/Programs/FifthSection';
import SixthSection from '@/components/Programs/SixthSection';
import Footer from '@/components/Footer';

export default function DigitalBusinessMBA() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <MainSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </div>
  );
}
