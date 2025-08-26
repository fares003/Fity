import React from 'react'
import image from '@/public/images/braces.png'
function Result({ result, height }: { result: number | null, height: number | null }) {
  return (
    <div className='bg-white bg-gradient-to-r from-red-500 to-orange-500 h-full p-8 text-black'>
      <div className='flex gap-0 items-center '>
        <div className='flex flex-col gap-4'>
        <p className='text-3xl'>Your BMI Score</p>

        <p className='text-8xl font-bold'>{result?.toFixed(1)}</p>
        </div>
        <img src={image.src} alt="" className='h-48 object-contain' />
        <div className='text-black text-xl'>Healthy weight range<br /> for your height:<br /> <span className='font-bold'>

          {(18.5 * (height! / 100) ** 2).toFixed(1)} - {(24.9 * (height! / 100) ** 2).toFixed(1)}

          </span></div>
        </div>
    </div>
  )
}

export default Result