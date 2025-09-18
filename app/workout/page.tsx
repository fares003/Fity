import React from 'react'
import Card from '../Components/Card'
function page() {
  return (
    <div className='h-screen bg-gray-200  px-8 py-16'>
        <Card className='p-12 bg-[#bb43da]' body={<div className='font-bold text-xl'>Add Workout</div>}/>
    </div>
  )
}

export default page