import React from 'react'
// import { Spotlight } from './ui/spotlight'
const Loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-black-100'>
        <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
    </div>
  )
}

export default Loading