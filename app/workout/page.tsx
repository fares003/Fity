import React from 'react'
import Card from '../Components/Card'
import WelcomeBar from './components/WelcomeBar'

function page() {
  return (
    <div className='h-screen bg-gray-200  p-4 '>
        <WelcomeBar mainTitle='Welcome back champion! ' subTitle='Ready to crush your workout today?🔥🔥'/>
    </div>
  )
}

export default page