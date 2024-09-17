import React from 'react'
import { RobotViewer } from './RobotModel'
// import { Spotlight } from './ui/spotlight'
const Loading = () => {
  return (

    <div className='h-screen w-full flex justify-center items-center bg-black-100 mt-10'>

        <RobotViewer />

    </div>
  )
}

export default Loading