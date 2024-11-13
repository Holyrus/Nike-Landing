import JordanLogo from '../assets/JordanLogo.png';
import React, { useState } from 'react';
import { HELP_PROP } from '../constants/index.jsx';


const NavBar1 = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    displayDialog();
  }

  const handleMouseLeave = () => {
    removeDialog();
  }

  const displayDialog = () => {
    setIsOpen(true);
  }

  const removeDialog = () => {
    setIsOpen(false);
  }


  return (
    <nav className="z-20 hidden lg:flex flex-row justify-between items-center bg-[#f5f5f5] h-[35px] w-full">
        <a href="https://www.nike.com/fi/jordan?_gl=1*1pdx322*_up*MQ..&gclid=EAIaIQobChMIjPu60eifiQMVPlORBR2uWSvrEAAYASAAEgIPRvD_BwE&gclsrc=aw.ds" className='ml-11 mt-[2px]'><img src={JordanLogo} alt="Jordan Logo" width="32px" height="32px"/></a>
        <div className='flex flex-row mr-14 text-center gap-3 font-medium text-[0.8rem] justify-center items-center'>
          <a className="hover:text-[#707073ff]" href='https://www.nike.com/fi/retail?_gl=1*1kzs8we*_up*MQ..&gclid=EAIaIQobChMIjPu60eifiQMVPlORBR2uWSvrEAAYASAAEgIPRvD_BwE&gclsrc=aw.ds'>Find a Store</a>
          <div className='border-r border-spacing-1 border-black h-[12px] w-[1px]'></div>

          <p className='hover-trigger hover:text-[#707073ff] cursor-pointer h-[35px] mt-[16px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Help</p>
          <div className={`bg-white text-black z-20 h-[293px] w-[230px] top-0 rounded-b-lg mt-[35px] mr-[190px] opacity-0 ${isOpen ? 'absolute opacity-100 translate-y-0 ' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-300`} onMouseEnter={displayDialog} onMouseLeave={removeDialog}>
            <div className='flex flex-col col-span-1 justify-start items-start mx-5 my-3 gap-1'>
              <a href='https://www.nike.com/fi/help?_gl=1*14161i9*_up*MQ..&gclid=EAIaIQobChMIjPu60eifiQMVPlORBR2uWSvrEAAYASAAEgIPRvD_BwE&gclsrc=aw.ds' className='font-medium text-[1rem] mb-2'>Help</a>
              {HELP_PROP.map((prop, index) => (
                <a className='mb-[3px] text-[#707073ff] hover:text-black' key={index} href={prop.href}>
                  {prop.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className='border-r border-spacing-1 border-black h-[12px] w-[1px]'></div>
          <a className='hover:text-[#707073ff]' href='https://www.nike.com/fi/membership?_gl=1*9m9sts*_up*MQ..&gclid=EAIaIQobChMIjPu60eifiQMVPlORBR2uWSvrEAAYASAAEgIPRvD_BwE&gclsrc=aw.ds'>Join Us</a>
          <div className='border-r border-spacing-1 border-black h-[12px] w-[1px]'></div>
          <a className='hover:text-[#707073ff]' href='https://www.nike.com/fi/register?_gl=1*9m9sts*_up*MQ..&gclid=EAIaIQobChMIjPu60eifiQMVPlORBR2uWSvrEAAYASAAEgIPRvD_BwE&gclsrc=aw.ds'>Sign In</a>        
        </div>
    </nav>
  )
}

export default NavBar1
