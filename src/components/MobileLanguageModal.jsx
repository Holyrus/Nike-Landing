import { useState, useEffect } from 'react';
import { MODAL_AFRICA, MODAL_AMERICAS, MODAL_ASIA, MODAL_EAST, MODAL_EUROPE } from '../constants';
import useMediaQuery from "../constants/useMediaQuery";

const MobileLanguageModal = ({ isOpenMobile, onCloseMobile }) => {

  const closingMobileModal = () => {
    onCloseMobile();
    setIsDetailsOpen1(false);
    setIsDetailsOpen2(false);
    setIsDetailsOpen3(false);
    setIsDetailsOpen4(false);
    setIsDetailsOpen5(false);
  }

  const [isDetailsOpen1, setIsDetailsOpen1] = useState(false);

  const toggleOpen1 = () => {
        setIsDetailsOpen1(!isDetailsOpen1);
  }

  const [isDetailsOpen2, setIsDetailsOpen2] = useState(false);

  const toggleOpen2 = () => {
        setIsDetailsOpen2(!isDetailsOpen2);
  }

  const [isDetailsOpen3, setIsDetailsOpen3] = useState(false);

  const toggleOpen3 = () => {
        setIsDetailsOpen3(!isDetailsOpen3);
  }

  const [isDetailsOpen4, setIsDetailsOpen4] = useState(false);

  const toggleOpen4 = () => {
        setIsDetailsOpen4(!isDetailsOpen4);
  }

  const [isDetailsOpen5, setIsDetailsOpen5] = useState(false);

  const toggleOpen5 = () => {
        setIsDetailsOpen5(!isDetailsOpen5);
  }

  const isLargeScreen = useMediaQuery('(min-width: 320px)');

  useEffect(() => {
    if (isOpenMobile && isLargeScreen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [isOpenMobile, isLargeScreen]);

  if (!isOpenMobile) return null;

  return (
    <section className='lg:hidden fixed inset-0 bg-white flex flex-col items-center justify-start z-50 overflow-y-scroll hide-scrollbar'>
      
      <button onClick={closingMobileModal} className='fixed z-50 right-7 top-11 bg-black rounded-full p-[6px] hover:bg-[#ccccccff]'>
            <svg className='text-white' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
      </button>
      
      <div className='flex justify-center items-start w-full pt-10 px-5 pr-[80px]'>
        <p className='text-black text-[32px] font-medium text-center leading-10 w-['>Select your Location</p>
      </div>

      <div className='flex flex-col justify-start items-start w-full px-6 mt-7 mb-14'> 

                <details onClick={toggleOpen1} className='flex flex-col flex-nowrap w-full border-b-[1.5px] border-[#e6e6e6ff]'>
                    <summary className='flex items-center justify-between h-[88px] cursor-pointer'>
                        <span className='text-[24px] font-medium'>Africa</span>
                        <span className=''>
                            <svg className={`${isDetailsOpen1 ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                            <svg className={`rotate-180 ${isDetailsOpen1 ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </summary>
                    <div className='overflow-hidden w-full flex flex-nowrap gap-3 flex-col mb-8'>
                        {MODAL_AFRICA.map((item, index) => (
                            <a className='group flex flex-row justify-start items-start w-full h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                            
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
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
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
                </details>

                <details onClick={toggleOpen2} className='flex flex-col flex-nowrap w-full border-b-[1.5px] border-[#e6e6e6ff]'>
                    <summary className='flex items-center justify-between h-[88px] cursor-pointer'>
                        <span className='text-[24px] font-medium'>Americas</span>
                        <span className=''>
                            <svg className={`${isDetailsOpen2 ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                            <svg className={`rotate-180 ${isDetailsOpen2 ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </summary>
                    <div className='overflow-hidden w-full flex flex-nowrap gap-3 flex-col mb-8'>
                        {MODAL_AMERICAS.map((item, index) => (
                            <a className='group flex flex-row justify-start items-start w-full h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                            
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
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
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
                </details>

                <details onClick={toggleOpen3} className='flex flex-col flex-nowrap w-full border-b-[1.5px] border-[#e6e6e6ff]'>
                    <summary className='flex items-center justify-between h-[88px] cursor-pointer'>
                        <span className='text-[24px] font-medium'>Asia Pacific</span>
                        <span className=''>
                            <svg className={`${isDetailsOpen3 ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                            <svg className={`rotate-180 ${isDetailsOpen3 ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </summary>
                    <div className='overflow-hidden w-full flex flex-nowrap gap-3 flex-col mb-8'>
                        {MODAL_ASIA.map((item, index) => (
                            <a className='group flex flex-row justify-start items-start w-full h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                            
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
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
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
                </details>

                <details onClick={toggleOpen4} className='flex flex-col flex-nowrap w-full border-b-[1.5px] border-[#e6e6e6ff]'>
                    <summary className='flex items-center justify-between h-[88px] cursor-pointer'>
                        <span className='text-[24px] font-medium'>Europe</span>
                        <span className=''>
                            <svg className={`${isDetailsOpen4 ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                            <svg className={`rotate-180 ${isDetailsOpen4 ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </summary>
                    <div className='overflow-hidden w-full flex flex-nowrap gap-3 flex-col mb-8'>
                        {MODAL_EUROPE.map((item, index) => (
                            <a className='group flex flex-row justify-start items-start w-full h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                            
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
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
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
                </details>

                <details onClick={toggleOpen5} className='flex flex-col flex-nowrap w-full border-b-[1.5px] border-[#e6e6e6ff]'>
                    <summary className='flex items-center justify-between h-[88px] cursor-pointer'>
                        <span className='text-[24px] font-medium'>Middle East</span>
                        <span className=''>
                            <svg className={`${isDetailsOpen5 ? 'hidden' : 'block'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg>
                            <svg className={`rotate-180 ${isDetailsOpen5 ? 'block' : 'hidden'}`} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M18.966 8.476L12 15.443 5.033 8.476"></path></svg> 
                        </span>
                    </summary>
                    <div className='overflow-hidden w-full flex flex-nowrap gap-3 flex-col mb-8'>
                        {MODAL_EAST.map((item, index) => (
                            <a className='group flex flex-row justify-start items-start w-full min-h-[67px] rounded-2xl border border-[#ccccccff] hover:bg-[#ccccccff]' href={item.href} key={index}>
                                
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
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
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
                </details>

      </div>

    </section>
  )
}

export default MobileLanguageModal
