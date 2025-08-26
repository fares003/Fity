"use client"
import SliderComponent from '@/app/Components/Slider'
import React from 'react'

function Slider({type,value,setValue}: {type: string,value:number,setValue: (value: number) => void}) {
  return (
        <div className="flex flex-col gap-4 max-w-lg">
        <div className='flex justify-between'>
          <label htmlFor={type}>
            {type[0].toUpperCase() + type.slice(1)} <span className="p-1 text-sm bg-gray-700">{type === "height" ? "CM" : "KG"}</span>
          </label>
          <span className='border-b-1 border-b-red-500'>{value}	&rdquo;</span>
          </div>
          <SliderComponent
            value={value}
            onChange={(_, newValue) => setValue(newValue as number)}
            min={type === "height" ? 100 : 30}
            max={type === "height" ? 250 : 200}
            defaultValue={type === "height" ? 170 : 70}
            step={1}
            marks={
              type === "height"
            ? [
                { value: 150, label: "150 cm" },
                { value: 170, label: "170 cm" },
                { value: 190, label: "190 cm" },
              ]
            : [
                { value: 50, label: "50 kg" },
                { value: 70, label: "70 kg" },
                { value: 90, label: "90 kg" },
              ]
            }
            colorStart="#ef4444" 
            colorEnd="#E57373" 
            valuetext={(v) => `${v} ${type === "height" ? "cm" : "kg"}`}
            className="max-w-lg text-white"
            name={type}
          />
        </div>
  )
}

export default Slider