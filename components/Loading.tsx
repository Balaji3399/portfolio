import React from 'react'
import { RobotViewer } from './RobotModel'
// import { Spotlight } from './ui/spotlight'
const Loading = () => {
  return (

    <div className='h-screen w-full flex flex-col justify-center items-center bg-black-100'>

        <RobotViewer />

    </div>
  )
}

export default Loading