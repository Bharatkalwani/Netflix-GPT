import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen pt-[15%] px-8 md:px-24 absolute text-white bg-gradient-to-r from to-black aspect-video'>
    <h1 className='text-lg md:text-3xl font-bold mt-5 md:mt-0 mb-3 md:mb-0'>{title}</h1>
    <h1 className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</h1>
    <div className=''>
      <button className='bg-white text-black px-6  py-2 text-lg   md:text-xl rounded-lg hover:bg-opacity-70'>▶️ Play</button>
      <button className='bg-gray-500 text-white px-6 mx-2 py-2  text-lg  md:text-xl bg-opacity-50 rounded-lg'>ℹ️ More info</button>
    </div>
    </div>
  )
}

export default VideoTitle