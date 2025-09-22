import Card from '@/app/Components/Card'
import React from 'react'

function Kcal() {
  return (
    <div className='w-full gap-2 flex justify-between items-center'>
        
        <Card Header={
            <h1>
                🔥Consumed
            </h1>
        }
        body={
            <div className='flex items-center gap-4'>
                <p className='text-4xl '>2,450</p>
                <p className='text-4xl '>kcal</p>
            </div>
        }
        footer={
            <p className='text-sm text-gray-500'>Goal: 3,000 kcal</p>
        }
        className='gap-2 flex-1 border-none shadow-xl bg-gradient-to-t from-yellow-200 to-slate-50'
        />
         <Card Header={
            <h1>
                🥑remaining
            </h1>
        }
        body={
            <div className='flex items-center gap-4'>
                <p className='text-4xl '>550</p>
                <p className='text-4xl '>kcal</p>
            </div>
        }
        footer={
            <p className='text-sm text-gray-500'>maximum</p>
        }
        className='gap-2 flex-1 border-none shadow-xl bg-gradient-to-t from-yellow-200 to-slate-50'
        />
    </div>
  )
}

export default Kcal