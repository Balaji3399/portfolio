// import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import {Spotlight} from './ui/spotlight'
import { TextHoverEffect } from './ui/text-hover-effect'
import { TextRevealCard } from './ui/text-reveal-card'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div className='flex gap-x-10 flex-col'>
            <Spotlight className='-top-20 -left-20 w-[10vw] md:-top-10 md:-left-10 '  fill='blue' />
            <Spotlight className='left-full top-0' fill='purple'/>
            <Spotlight className='left-0 float-end'  fill='purple'/>
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white  pt-20 text-center  absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          {/* <div className="absolute pointer-events-none inset-0  dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
            <div className="w-full flex justify-center text-4xl sm:text-5xl font-bold italic relative z-20 bg-clip-text text-transparent hover:bg-gradient-to-b from-purple to-red-400 py-8">
            <TextRevealCard revealText='Coding the Future of Digital Experiences' 
                            className='-top-12 bg-transparent  border-none text-start w-3/4' 
                            text='Coding the Future of Digital Experiences'>
            </TextRevealCard>
            </div>
            <div className='w-full h-1/2 bg-black-100'>

              <TextHoverEffect text='Hi' duration={0}/>
            </div>
        </div>
    </div>
  )
}

export default Hero