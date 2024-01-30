"use client";
import React from 'react'

const Error = ({reset}: {reset: () => void }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-500 text-white'>
        <h3 className='text-4xl font-bold mb-4'>Error happened</h3>
        <button 
            onClick={() => reset()} 
            className='bg-white text-red-500 px-4 py-2 rounded-full font-bold shadow-md transition duration-300 hover:bg-green-500 hover:text-white'>
                Retry
        </button>
    </div>
  )
}

export default Error