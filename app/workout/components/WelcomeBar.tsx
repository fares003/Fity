import React from 'react'
import { IoMdNotifications } from 'react-icons/io'

function WelcomeBar({mainTitle, subTitle}: {mainTitle: string, subTitle: string}) {
  return (
          <div className='w-full text-3xl items-center font-bold mb-8 p-4 flex justify-between rounded-xl bg-white shadow-md text-black'>
        <div>
          <h1>
        {mainTitle}
        </h1>
        <h4 className='text-lg font-normal mt-2 text-gray-600'>
        {subTitle}
        </h4>
        </div>
        <div className='relative cursor-pointer'>
          <span   className="text-4xl relative 
             before:content-[''] before:w-2 before:h-2 
             before:rounded-full before:bg-red-500 
             before:absolute before:top-0 before:right-0">
<IoMdNotifications 
color='gray' size={40}
/>
</span>
        </div>
      </div>
  )
}

export default WelcomeBar