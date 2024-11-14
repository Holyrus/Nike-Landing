import React, { useState } from 'react';
import { FOOTER_COMPANY, FOOTER_GUIDES, FOOTER_HELP, FOOTER_RESOURCES, FOOTER_TERMS } from '../constants'

const Footer = ({ openModal }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
    }

  return (
    <footer className='flex lg:px-[48px] lg:mt-[60px] lg:pb-[48px]'>
        <div className='hidden lg:flex w-full justify-start items-start flex-col gap-[4.5rem]'>
            
            <div className='w-full h-[275px] flex flex-row justify-start items-start gap-3'>

                <div className='flex flex-col justify-between items-start flex-1 pr-16 h-full'>
                    <a className='text-[14px] font-medium' href="#">Resources</a>
                    <div className='flex justify-between items-start flex-col gap-3'>
                        {FOOTER_RESOURCES.map((item, index) => (
                            <a className='text-[14px] font-medium text-[#707073ff]' href={item.href} key={index}>{item.title}</a>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col justify-between items-start flex-1 pr-16 h-full'>
                    <a className='text-[14px] font-medium' href="#">Help</a>
                    <div className='flex justify-between items-start flex-col gap-3'>
                        {FOOTER_HELP.map((item, index) => (
                            <a className='text-[14px] font-medium text-[#707073ff]' href={item.href} key={index}>{item.title}</a>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col justify-between items-start flex-1 pr-16 h-full pb-8'>
                    <a className='text-[14px] font-medium' href="#">Company</a>
                    <div className='flex justify-between items-start flex-col gap-3'>
                        {FOOTER_COMPANY.map((item, index) => (
                            <a className='text-[14px] font-medium text-[#707073ff]' href={item.href} key={index}>{item.title}</a>
                        ))}
                    </div>
                </div>

                <div className='flex flex-row justify-end items-start flex-1 pl-16 h-full'>
                    <button onClick={openModal} className='flex flex-row justify-between items-center text-[14px] gap-1 text-[#707073ff] font-medium'>
                        <svg className='text-[#707073ff]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="16px" height="16px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"></path></svg>
                        Finland
                    </button>
                </div>

            </div>

            <div className='w-full h-[75px] flex flex-row justify-start items-start gap-x-8 flex-wrap'>

                <p className='text-[14px] text-[#707073ff] font-medium'>© 2024 Nike, Inc. All rights reserved</p>

                <div className='flex flex-row relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p className='text-[14px] text-[#707073ff] font-medium cursor-default'>Guides</p>
                    <svg className='text-[#707073ff]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M17.5 9.25l-5.5 5.5-5.5-5.5"></path></svg>
                
                    <div className={`bg-white w-[200px] h-[215px] rounded-lg shadow-[0px_-4px_4px_rgba(0,0,0,0.02),0px_4px_4px_rgba(0,0,0,0.02),-4px_0px_4px_rgba(0,0,0,0.02),4px_0px_4px_rgba(0,0,0,0.02)] border bottom-0 ${isOpen ? 'absolute opacity-100' : 'absolute opacity-0 pointer-events-none'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        
                        <div className='flex flex-col w-full col-span-1 justify-start items-start my-2'>
                            {FOOTER_GUIDES.map((item, index) => (
                                <a href={item.href} key={index} className='w-full h-[33px] text-[14px] text-[#707073ff] font-medium flex items-center px-3 hover:bg-[#e6e6e6ff] hover:text-black'>{item.title}</a>
                            ))}
                        </div>
                    
                    </div>
                
                </div>

                {FOOTER_TERMS.map((item, index) => (
                    <a href={item.href} key={index} className='text-[14px] text-[#707073ff] hover:text-black font-medium'>{item.title}</a>
                ))}

            </div>
        
        </div>
    </footer>
  )
}

export default Footer
