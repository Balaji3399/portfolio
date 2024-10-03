import Image from 'next/image'
import React from 'react'
import photo from "../assets/Images/image.jpg"
const About = () => {
  return (
    <div>
        <div className=" container py-10" >
            <div>
                <div className='flex flex-col'>
                    <div className=''>
                        <h2 className="bg-gradient-to-r from-emerald-300 to-sky-400
                            inline-flex font-bold uppercase tracking-widest text-3xl
                            text-transparent bg-clip-text py-5 " >
                            <span>About ME</span>
                        </h2>
                        <div className='flex justify-center'>
                            <Image src={photo} alt='' className='w-26 md:w-36' />
                        </div>
                        <h1 className='text-4xl py-2 font-semibold md:text-5xl'>Know Who I am</h1>
                    </div>
                    <p className='leading-6 text-md text-[#afb5b8] tracking-wide text-justify  py-5'>
                    I am a passionate web developer with a focus on creating seamless, interactive experiences for 
                    both web. I have developed dynamic websites, including an academy 
                    platform for educational purposes and AI-driven applications like AITripPlanner using 
                    cutting-edge tools such as Google Gemini. My expertise lies in building responsive, 
                    user-centric designs that align with business goals while ensuring an engaging user 
                    experience. By integrating the latest technologies and delivering functional solutions, I consistently showcase my commitment to quality and innovation across my projects.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About