// import { StarIcon } from 'lucide-react'
import React, { Fragment } from 'react'
import { MdStarRate } from 'react-icons/md'

const words = [
    "UI/UX",
    "Design",
    "Development",
    "Responsive" ,
    "Interactive",
    "User Friendly",
    "Secure",
    "Performance",
    "Scalable"
]
const Tape = () => {
  return (
    <div className='py-16 lg:py-24 overflow-clip'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent)]'>
        <div className='flex flex-none gap-10 pr-4 py-3 animate-move-left [animation-duration:20s] '

        >
            {[...new Array(2)].fill(0).map((_,index) => (
                <Fragment key={index} >
                    {words.map(word => (
                        <div key={word} className='inline-flex gap-4 items-center px-2'>
                            <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                            <MdStarRate className='size-4 text-gray-900 -rotate-12' />
                        </div>
                    ))}
                </Fragment>
            ))}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Tape