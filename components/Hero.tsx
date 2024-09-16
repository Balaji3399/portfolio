// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
"use client"

import Image from 'next/image'
import Typewriter from './Typewriter'
import {Spotlight} from './ui/spotlight'
// import { TextHoverEffect } from './ui/text-hover-effect'
import { TextRevealCard } from './ui/text-reveal-card'
import image from './Images/image.jpg'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6'

const Hero = () => {

  const items = ["Programmer" , "Full Stack Developer"]
  return (
    <div className="pb-20 pt-36">
        <div className='flex gap-x-10 flex-col'>
            <Spotlight className='-top-40 -left-10 w-[10vw] md:-top-20 md:-left-32 h-screen '  fill='blue' />
            <Spotlight className='left-full -top-32 h-[400vh] w-[50vw]' fill='purple'/>
            <Spotlight className='-left-32 top-28 h-[300vh] w-96'  fill='purple'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0] bg-grid-black/[0.2] flex items-center justify-center top-0 left-0 ">
          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
          <div className="h-screen w-full  dark:bg-black-100 bg-white  pt-20 text-center absolute  top-0 left-0">
          <div className="hidden sm:flex w-full justify-center font-extrabold  italic  relative z-20 bg-clip-text text-transparent  py-2">
            <TextRevealCard 
              revealText='Coding the Future of Digital Experiences' 
              className='-top-5 bg-transparent border-none text-start w-3/4 font-extrabold' 
              text='Coding the Future of Digital Experiences' 
            />
          </div>

          <div className='w-full grid grid-cols-1 lg:grid-cols-2 bg-black-100 relative z-40 bg-transparent gap-5 grid-flow-dense'>
            {/* <div className='absolute w-full top-0'>
              <TextHoverEffect text='' duration={0} />
            </div> */}

            {/* description */}
            <div className='w-full flex sm:px-20 md:px-10 lg:px-20 py-5 z-10 sm:order2'>
              
              <div className="description w-full ">
                <div className='w-full'>
                  <h2 className='text text-4xl font-bold block text-start py-5'>I am ANABALA BALAJI</h2>
                  <h1 className='text-start font-extrabold text-6xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-purple to-red-400'>Web Developer +
                    <span>
                      <Typewriter texts={items} />
                    </span>
                  </h1>
                  
                  <div className='py-5'>
                    <p className='w-full  text-lg max-w-lg leading-7 flex justify-center text-justify font-medium'>
                      Creative web developer dedicated to transforming complex problems into elegant, efficient digital solutions.
                    </p>
                  </div>
                  <div className='w-full z-50'>
                    <div className=' items-start flex py-10 gap-5'>
                      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 text-md font-medium text-white backdrop-blur-3xl">
                          Resume
                        </span>
                      </button>
                      <div className='flex justify-center items-center w-1/2 gap-5'>
                        <Link href={"/"}>
                          <Button>
                            <FaInstagram />
                          </Button>
                        </Link>
                        <Link href={"/"}>
                          <Button>
                            <FaSquareXTwitter />
                          </Button>
                        </Link>
                        <Link href={"/"}>
                          <Button>
                            <FaFacebookF />
                          </Button>
                        </Link>
                        <Link href={"/"}>
                          <Button>
                            <FaGithub />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

                          {/* image */}
            <div className='w-full flex items-center justify-center sm:order-1'>
              <div className=''>
                    <Image 
                    src={image} 
                    width={300}
                    height={300}
                    alt='image'/>
                  </div>
              </div>
          </div>

          {/* <div className='flex justify-center relative my-20 z-10'>

            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Web Magic</h2>
            </div> 

          </div> */}

        </div>
        </div>
        

    </div>
  )
}

export default Hero