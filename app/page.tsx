"use client"

import Navbar from '@/components/Navbar';
import Hero from '../components/Hero'
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import StarsCanvas from '@/components/StartBackground';
// import { setTimeout } from 'timers/promises';
export default function Home() {

  const [isloading , setIsLoading] = useState(true) ;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false) ;
    } , 3000) ;

    return () => clearTimeout(timer);

  })

  if(isloading){
    return <Loading />
  }

  return (
    
    <>
    {/* <Navbar /> */}
    <main className="relative bg-black-100 flex flex-col  mx-auto overflow-hidden">
      <div className="">
      <StarsCanvas />
        <Navbar/>
        <Hero />
      </div>
    </main>

    </>
  );
}
