import React from 'react'
import { Service } from '@/Types/ServicesType'
function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={`flex overflow-hidden text-white ${service.id % 2 === 0 ? 'bg-gradient-to-b from-black-800 via-red-700 to-red-500' : 'bg-gradient-to-b from-black-800 via-orange-700 to-black'} relative flex-col  gap-4 pl-4 py-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <h2 className='main-red font-bangers text-4xl  tracking-wider'>{service.title}</h2>
      <h6 className='text-xs text-gray-300'>{service.subtitle}</h6>
      <p className='text-xs w-[50%] text-gray-400'>{service.description}</p>
      <div className='flex items-center gap-2'>
        <button className='text-xs text-white bg-red-900 px-4 py-2 rounded-lg hover:bg-red-800 transition-colors duration-300'>Join Now</button>
        </div>
      <img src={service.image} className='right-[-50px]  top-0 float-right  absolute 0 w-fit h-full object-contain rounded-lg' alt={service.title} />
    </div>
  )
}

export default ServiceCard