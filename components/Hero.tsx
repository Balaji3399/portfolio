import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import {Spotlight} from './ui/spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='purple' />
            <Spotlight className='top-40 left-full h-[80vh] w-[25vw]' fill='white'/>
            <Spotlight className='top-28 left-80 h-[100vh] w-[50vw]' fill='blue'/>
        </div>
        < BackgroundBeamsWithCollision className=' bg-black-100' >
              <div></div>
          </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero