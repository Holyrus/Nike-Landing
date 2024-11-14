import React, { useEffect } from 'react';
import { MODAL_AFRICA, MODAL_AMERICAS, MODAL_ASIA, MODAL_EAST, MODAL_EUROPE } from '../constants';
import useMediaQuery from "../constants/useMediaQuery";

const LanguageModal = ({ isOpen, onClose }) => {

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (isOpen && isLargeScreen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isOpen, isLargeScreen]);

  if (!isOpen) return null;

  return (
    <section className='hidden fixed inset-0 bg-white lg:flex flex-col items-start justify-start z-50 overflow-y-scroll hide-scrollbar'>
      
      <button onClick={onClose} className='fixed right-7 top-11 bg-black rounded-full p-[6px] hover:bg-[#ccccccff]'>
            <svg className='text-white' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
      </button>
      
      <div className='flex justify-center items-start w-full pt-10 px-28 pl-6'>
        <p className='text-black text-[32px] font-medium'>Select your Location</p>
      </div>
    
      <div className='flex flex-col justify-start items-start w-full px-36 pb-36'>

        <div className='flex flex-col justify-start items-start w-full pt-12 pl-8'>

            <div className='flex justify-start items-center w-full mb-10'>
                <p className='text-[32px] font-medium text-black'>Africa</p>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-center gap-3 w-full'>
                {MODAL_AFRICA.map((item, index) => (
                    <a className='group flex flex-row justify-start items-start w-[216px] h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                        
                        <svg 
                            className='text-[#ccccccff] mt-2 ml-2 mr-1 group-hover:text-[#707073ff]'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            width="24" 
                            height="30"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M12 2C8.134 2 5 5.134 5 9c0 4.926 6.103 11.021 6.312 11.234a1.2 1.2 0 0 0 1.376 0C12.897 20.021 19 13.926 19 9c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                            />
                        </svg>

                        <div className='flex flex-col mt-2'>
                            <h4 className='text-[20px] text-black font-medium'>{item.title}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.lang}</p>
                        </div>

                    </a>
                ))}
            </div>

            

        </div>

        <div className='flex flex-col justify-start items-start w-full pt-12 pl-8'>

            <div className='flex justify-start items-center w-full mb-10'>
                <p className='text-[32px] font-medium text-black'>Americas</p>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-center gap-3 w-full'>
                {MODAL_AMERICAS.map((item, index) => (
                    <a className='group flex flex-row justify-start items-start w-[216px] h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                        
                        <svg 
                            className='text-[#ccccccff] mt-2 ml-2 mr-1 group-hover:text-[#707073ff]'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            width="24" 
                            height="30"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M12 2C8.134 2 5 5.134 5 9c0 4.926 6.103 11.021 6.312 11.234a1.2 1.2 0 0 0 1.376 0C12.897 20.021 19 13.926 19 9c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                            />
                        </svg>

                        <div className='flex flex-col mt-2'>
                            <h4 className='text-[20px] text-black font-medium'>{item.title}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.lang}</p>
                        </div>

                    </a>
                ))}
            </div>

            

        </div>

        <div className='flex flex-col justify-start items-start w-full pt-12 pl-8'>

            <div className='flex justify-start items-center w-full mb-10'>
                <p className='text-[32px] font-medium text-black'>Asia Pacific</p>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-center gap-3 w-full'>
                {MODAL_ASIA.map((item, index) => (
                    <a className='group flex flex-row justify-start items-start w-[216px] h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                        
                        <svg 
                            className='text-[#ccccccff] mt-2 ml-2 mr-1 group-hover:text-[#707073ff]'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            width="24" 
                            height="30"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M12 2C8.134 2 5 5.134 5 9c0 4.926 6.103 11.021 6.312 11.234a1.2 1.2 0 0 0 1.376 0C12.897 20.021 19 13.926 19 9c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                            />
                        </svg>

                        <div className='flex flex-col mt-2'>
                            <h4 className='text-[20px] text-black font-medium'>{item.title}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.lang}</p>
                        </div>

                    </a>
                ))}
            </div>

            

        </div>

        <div className='flex flex-col justify-start items-start w-full pt-12 pl-8'>

            <div className='flex justify-start items-center w-full mb-10'>
                <p className='text-[32px] font-medium text-black'>Europe</p>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-center gap-3 w-full'>
                {MODAL_EUROPE.map((item, index) => (
                    <a className='group flex flex-row justify-start items-start w-[216px] h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                        
                        <svg 
                            className='text-[#ccccccff] mt-2 ml-2 mr-1 group-hover:text-[#707073ff]'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            width="24" 
                            height="30"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M12 2C8.134 2 5 5.134 5 9c0 4.926 6.103 11.021 6.312 11.234a1.2 1.2 0 0 0 1.376 0C12.897 20.021 19 13.926 19 9c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                            />
                        </svg>

                        <div className='flex flex-col mt-2'>
                            <h4 className='text-[20px] text-black font-medium'>{item.title}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.lang}</p>
                        </div>

                    </a>
                ))}
            </div>

            

        </div>

        <div className='flex flex-col justify-start items-start w-full pt-12 pl-8'>

            <div className='flex justify-start items-center w-full mb-10'>
                <p className='text-[32px] font-medium text-black'>Middle East</p>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-start gap-3 w-full'>
                {MODAL_EAST.map((item, index) => (
                    <a className='group flex flex-row justify-start items-start w-[216px] min-h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                        
                        <svg 
                            className='text-[#ccccccff] mt-2 ml-2 mr-1 group-hover:text-[#707073ff]'
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none"
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            width="24" 
                            height="30"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M12 2C8.134 2 5 5.134 5 9c0 4.926 6.103 11.021 6.312 11.234a1.2 1.2 0 0 0 1.376 0C12.897 20.021 19 13.926 19 9c0-3.866-3.134-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" 
                            />
                        </svg>

                        <div className='flex flex-col mt-2 mb-2'>
                            <h4 className='text-[20px] text-black font-medium'>{item.title}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.lang}</p>
                        </div>

                        <div className='flex flex-col mt-3 mb-2 ml-auto mr-3' dir="rtl">
                            <h4 className='text-[15px] text-black font-medium'>{item.arabtitle}</h4>
                            <p className='text-[12.5px] text-[#78787aff] font-medium'>{item.arablang}</p>
                        </div>

                    </a>
                ))}
            </div>

            

        </div>

      </div>  

    </section>
  )
}

export default LanguageModal
