'use client';

import { useEffect, useState } from 'react';

import NavBar from '@/components/NavBar';
import MainSection from '@/components/Home/MainSection';
import ProgramsSection from '@/components/Home/ProgramsSection';
import FlagsSection from '@/components/Home/FlagsSection';
import SevenDayTrial from '@/components/Home/SevenDayTrial';
import HowToGetStarted from '@/components/Home/HowToGetStarted';
import GetStarted from '@/components/Home/GetStarted';
import SevenReasons from '@/components/Home/SevenReasons';
import Footer from '@/components/Footer';

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  /* if (loading) {
    return <SplashScreen />;
  } */

  return (
    <div className="flex flex-col">
      <NavBar />
      <MainSection />   
      <ProgramsSection/>        
      <FlagsSection />            
      <SevenDayTrial />
      <HowToGetStarted /> 
      <SevenReasons/>
      <GetStarted />       
      <Footer />       
    </div>
  );
}
