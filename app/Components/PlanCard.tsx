import React from 'react'
import { Plan } from '@/Types/PlansType'
function PlanCard({plan}: {plan: Plan}) {
  return (
    <div className={`flex rounded-lg flex-col ${plan.id % 2 === 0 ? 'border bg-red-500/10 border-red-500' : 
    'border bg-orange-500/10 border-orange-500'} text-white p-4 items-center gap-4`}>
      <h2 className={`text-lg font-bold ${plan.id % 2 === 0 ? 'text-red-500' : 'text-orange-500'}`}>Package</h2>

      <h2 className='font-bangers text-4xl text-white tracking-wider'>{plan.title}</h2>
      <h2 className={`text-lg font-bold ${plan.id % 2 === 0 ? 'text-red-500' : 'text-orange-500'}`}>Description</h2>
      <p>{plan.description}</p>
      <h2 className={`text-lg font-bold ${plan.id % 2 === 0 ? 'text-red-500' : 'text-orange-500'}`}>Features</h2>
           <ul className='list-disc pl-5 w-full' >
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className={`text-lg font-bold ${plan.id % 2 === 0 ? 'text-red-500' : 'text-orange-500'}`}>Price</h2>
      <p className='text-lg '><span className='text-3xl font-bold'>{plan.price}EGP </span>/month</p>
        <button className={`cursor-pointer hover:opacity-80 transition-all ${plan.id % 2 === 0 ? 'bg-red-500' : 'bg-orange-500'} text-white py-2 w-full px-4 rounded-full`}>Choose This Plan</button>
    </div>
  )
}


export default PlanCard