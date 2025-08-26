'use client'
import React, { useState } from 'react'
import { plansData } from '@/StaticData/PlansData'
import PlanCard from '@/app/Components/PlanCard'

function PlansSection() {
    const options = [
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "annually", label: "Annually" },
  ];
    const [selected, setSelected] = useState("monthly");

  return (
    
    <div className='flex items-center flex-col gap-8'>
      <h1 className='text-4xl font-bold text-orange-500'><span className='text-white'>Our </span>Plans</h1>
      <p className='text-lg text-gray-600'>We offer a variety of services to help you achieve your fitness goals.</p>
      
        <div className="flex bg-transparent border border-red-500 rounded-full overflow-hidden w-fit">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => setSelected(option.id)}
          className={`px-6 rounded-full py-2 text-sm font-medium transition-all duration-300 
            ${
              selected === option.id
                ? "bg-red-500 text-white"
                : "text-gray-300 hover:bg-red-500/20"
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
    {selected === "monthly" && (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {plansData.map(plan => (
          plan.Plan === 'monthly' && (
          <PlanCard key={plan.id} plan={plan} />
        )
      ))}
      
      </div>
    )}
    {selected === "quarterly" && (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {plansData.map(plan => (
          plan.Plan === 'quarterly' && (
          <PlanCard key={plan.id} plan={plan} />
        )
      ))}
    </div>
    )}
    {selected === "annually" && (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
        {plansData.map(plan => (
          plan.Plan === 'annually' && (
          <PlanCard key={plan.id} plan={plan} />
        )
      ))}
    </div>
    )}
    </div>

)

}

export default PlansSection