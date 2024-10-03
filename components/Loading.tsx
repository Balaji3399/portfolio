import React from 'react'
import { RobotViewer } from './RobotModel'
import ProgressBar from './ProgressBar'
// import { Spotlight } from './ui/spotlight'
const Loading = () => {
  return (

    <div className='h-screen w-full flex flex-col justify-center items-center bg-black-100'>

        <RobotViewer />
         <h2 className='font-bold text-lg '>Loading Please Wait .....</h2>
        <ProgressBar />
    </div>
  )
}

export default Loading