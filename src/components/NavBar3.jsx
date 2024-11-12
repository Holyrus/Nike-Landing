import React, { useState, useEffect } from 'react';

const NavBar3 = () => {

  const [isShopVisible, setIsShopVisible] = useState(true);

  useEffect(() => {
    
    const changeVisibility = () => {
      setIsShopVisible((prevState) => (prevState === true ? false : true));
    }

    const intervalId = setInterval(changeVisibility, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full h-[75px] lg:h-[58px] relative z-0 flex items-center bg-[#f5f5f5ff]">

        <div className={`z-0 flex flex-col justify-center items-center text-center w-full gap-1 transition-all duration-500 ease-in-out absolute ${isShopVisible ? 'translate-x-0' : 'translate-x-[-100vw]'}`}>
            <p className="text-[16px]">Shop All New Arrivals</p>
            <a href="#" className="text-[12px] font-sans font-medium underline">Shop</a>
        </div>

        <div className={`z-0 flex flex-col px-2 justify-center items-center text-center w-full gap-1 transition-all duration-500 ease-in-out absolute ${isShopVisible ? 'translate-x-[100vw]' : 'translate-x-0'}`}>
            <p className="text-[16px]">Free Delivery & Returns</p>
            <div className="flex lg:flex-row flex-col gap-1">
              <p className="text-[12px] font-normal">Nike Members get free delivery and free 30-day returns.</p>
              <div className='flex justify-center flex-row gap-1'>
                <a href="#" className="text-[12px] font-sans font-bold underline">Learn More</a>
                <a href="#" className="text-[12px] font-sans font-bold underline">Join Us</a>
              </div>
            </div>
        </div>

    </section>
  )
}

export default NavBar3
