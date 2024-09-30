"use client"

import Navbar from '@/components/Navbar';
import Hero from '../components/Hero'
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import StarsCanvas from '@/components/StartBackground';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import { ProjectsSection } from '@/components/Projects';
import Tape from '@/components/Tape';
// import About from '@/components/About';

// import { RobotViewer } from '@/components/RobotModel';
// import { setTimeout } from 'timers/promises';
export default function Home() {

  const [isloading , setIsLoading] = useState(true) ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false) ;
    } , 6000) ;

    return () => clearTimeout(timer);

  })

  if(isloading){
    return <Loading />
  }

  return (
    
    <>
    {/* <Navbar /> */}
    <main className="relative bg-black-100 flex flex-col mx-auto  ">
      <div className="">
      <div className='hidden xl:flex  backdrop-blur-sm z-10 animation relative'>
      <BackgroundAnimation  />
      </div>
      <StarsCanvas />
        <Navbar/>
        <Hero />
        <ProjectsSection />
        <Tape />
        {/* <About /> */}
      </div>

      {/* <RobotViewer /> */}
    </main>
    {/* <RobotViewer /> */}

    </>
  );
}
