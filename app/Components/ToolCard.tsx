import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

import { ToolType } from '@/Types/ToolsType'
import Link from 'next/link';
function ToolCard({ tool }: { tool: ToolType }) {
  return (
    <div className={`flex flex-col text-white items-center p-8 rounded-lg ${tool.id % 2 === 0 ? 'bg-gradient-to-b from-black-800 via-red-700 to-red-500' : 'bg-gradient-to-b from-black-800 via-orange-700 to-black'}`}>
      <img src={tool.imageSrc} alt={tool.title} className='w-full h-32 object-contain rounded-lg' />
      <h3 className='text-xl font-semibold mt-4'>{tool.title}</h3>
      <Link href={`${tool.link}`} className='w-full mt-6 cursor-pointer'>learn more <IoIosArrowRoundForward className='inline' size={30} /></Link>
    </div>
  )
}
export default ToolCard