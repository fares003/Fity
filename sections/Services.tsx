import React from 'react'
import { Service } from '@/Types/ServicesType'
import servicesData from '@/StaticData/ServicesData'
import ServiceCard from '@/app/Components/ServiceCard'
function Services() {
  return (
    <div className='flex flex-col items-center gap-8 '>
      <h1 className='text-4xl font-bold main-red'><span className='text-white'>Our </span>Services</h1>
      <p className='text-lg text-gray-600'>We offer a variety of services to help you achieve your fitness goals.</p>
      <div className='grid grid-cols-4 grid-rows-auto gap-9'>
        {servicesData.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </div>
  )
}

export default Services
