import React, { useState } from 'react';
import { MERCH_CLOTHING, MERCH_FEATURED, MERCH_FEATURED_EXPAND, MERCH_KIDS, MERCH_SHOES } from '../constants'

const MerchMenu = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <section className='flex justify-start items-start sm:justify-center sm:items-start border-b-[1.5px] border-[#e6e6e6ff] mt-[45px] pb-[80px] sm:pb-[60px] lg:pb-[100px] mx-6 sm:mx-6 sm:px-6'>
        
        <div className='hidden sm:flex md:flex lg:flex flex-row flex-nowrap justify-start items-start sm:gap-5 md:gap-14' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

              <div className='flex flex-1 flex-nowrap flex-col justify-start items-start gap-4'>
                <h1 className='font-medium text-[20px] mb-[6px]'>Shoes</h1>
                {MERCH_SHOES.map((item, index) => (
                  <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                ))}
              </div>

              <div className='flex flex-1 flex-nowrap flex-col justify-start items-start gap-4'>
                <h1 className='font-medium text-[20px] mb-[6px]'>Clothing</h1>
                {MERCH_CLOTHING.map((item, index) => (
                  <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                ))}
              </div>

              <div className='flex flex-1 flex-nowrap flex-col justify-start items-start gap-4'>
                <h1 className='font-medium text-[20px] mb-[10px]'>Kids'</h1>
                {MERCH_KIDS.map((item, index) => (
                  <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                ))}
              </div>

              <div className='flex flex-1 w-[350px] flex-nowrap flex-col justify-start items-start gap-4'>
                <h1 className='font-medium text-[20px] mb-[10px]'>Featured</h1>
                {MERCH_FEATURED.map((item, index) => (
                  <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                ))}
                {MERCH_FEATURED_EXPAND.map((item, index) => (
                  <a href={item.href} key={index} className={`text-[#707073ff] font-medium text-[17px] hover:text-black ${isHovered ? 'block' : 'hidden'}`}>{item.title}</a>
                ))}
              </div>
              
        </div>

        {/* Mobile menu  */}

        <div className='flex flex-nowrap sm:hidden md:hidden lg:hidden flex-col gap-1 justify-start items-start'>

              <details className='flex flex-col flex-nowrap gap-3'>
                <summary className='text-[20px] font-medium py-2 pr-10'>Shoes</summary>
                <div className='flex flex-nowrap flex-col gap-4 pl-6 py-4'>
                  {MERCH_SHOES.map((item, index) => (
                    <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                  ))}
                </div>
              </details>

              <details className='flex flex-col flex-nowrap gap-3'>
                <summary className='text-[20px] font-medium py-2 pr-10'>Clothing</summary>
                <div className='flex flex-nowrap flex-col gap-4 pl-6 py-4'>
                  {MERCH_CLOTHING.map((item, index) => (
                    <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                  ))}
                </div>
              </details>

              <details className='flex flex-col flex-nowrap gap-3'>
                <summary className='text-[20px] font-medium py-2 pr-10'>Kids'</summary>
                <div className='flex flex-nowrap flex-col gap-4 pl-6 py-4'>
                  {MERCH_KIDS.map((item, index) => (
                    <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                  ))}
                </div>
              </details>

              <details className='flex flex-col flex-nowrap'>
                <summary className='text-[20px] font-medium py-2 pr-10'>Featured</summary>
                <div className='flex flex-nowrap flex-col gap-4 pl-6 py-4'>
                  {MERCH_FEATURED.map((item, index) => (
                    <a href={item.href} key={index} className='text-[#707073ff] font-medium text-[17px] hover:text-black'>{item.title}</a>
                  ))}
                  {MERCH_FEATURED_EXPAND.map((item, index) => (
                  <a href={item.href} key={index} className={`text-[#707073ff] font-medium text-[17px] hover:text-black`}>{item.title}</a>
                ))}
                </div>
              </details>

        </div>
    
    </section>
  )
}

export default MerchMenu
