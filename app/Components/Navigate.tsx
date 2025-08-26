import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface NavigateProps {
  atNext: () => void;
  atPrevious: () => void;
  className?: string;
  pageCount: number;
  currentPage?: number;
}

export default function Navigate(props: NavigateProps) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
        <div className='flex items-center gap-4'>
      <FaArrowLeft className='text-white rounded-lg cursor-pointer border hover:opacity-20 transition-all text-4xl border-white p-2' onClick={props.atPrevious} />
      <FaArrowRight className='text-white rounded-lg cursor-pointer hover:opacity-20 transition-all border text-4xl border-white p-2' onClick={props.atNext} />
      </div>
      <div className='flex gap-2'>
    {Array.from({ length: props.pageCount }, (_, index) => (
        <div key={index} className={`w-10 h-2 rounded-full ${props.currentPage === index ? 'bg-red-500 ' : 'bg-gray-600'}`} />
    ))}
    </div>
    </div>
  )
}