import React from 'react'
import { EdgesData } from '@/StaticData/EdgesData'
import Advantages from '@/app/Components/Advantages'
function AdvantagesSection() {
  return (
    <div className='flex  w-full justify-between px-18'>
      {EdgesData.map((edge) => (
        <Advantages key={edge.id} Edge={edge} />
      ))}
    </div>
  )
}

export default AdvantagesSection