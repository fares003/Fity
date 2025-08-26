import React from 'react'
import { FooterData, icons } from '@/StaticData/FooterData'
function Footer() {
  return (
    <div className='flex justify-between text-gray-500 p-8  footerGray'>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-3xl text-red-500'>Fity</h1>
            <h3 className='text-white'>Transform Your Body</h3>
            <p className='max-w-xl tracking-wider leading-8'>
                Transform Your Body with FitMaker, Your Trusted Partner in Fitness. With Over 5 Years of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. Join Our Community and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?
            </p>
            <div className='flex gap-8'>
                {icons.map((icon) => (
                    <a href='#' key={icon.id}>{icon.icon}</a>
                ))}
            </div>
        </div>
        <div className='flex gap-12'>
            {FooterData.map((section) => (
                <div key={section.id} className='flex flex-col items-center gap-12'>
                    <h4 className={`text-xl font-bold ${section.id % 2 === 0 ? 'text-red-500' : 'text-orange-500'}`}>{section.title}</h4>
                    {section.links && (
                        <ul className='list-none flex items-center flex-col pl-5 gap-6'>
                            {section.links.map((link, index) => (
                                <a href='#' className=' hover:text-gray-200 transition-colors' key={index}>{link}</a>
                            ))}
                        </ul>
                    )}
                    {section.contact && (
                        <div className='flex flex-col gap-6'>
                            {section.contact.map((info, index) => (
                                <p key={index} >
                                     {info.value}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer