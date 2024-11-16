import { SHOP_ICONS } from "../constants"
import React, { useRef, useState, useEffect } from "react";
import useMediaQuery from "../constants/useMediaQuery";

const ShopIcons = () => {

  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const [currentAmount, setCurrentAmount] = useState(0);

  const isMediumScreen = useMediaQuery('(min-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isXLScreen = useMediaQuery('(min-width: 1280px)');

  useEffect(() => {
    if (isXLScreen) {
      setCurrentAmount(590);
    } else if (isLargeScreen) {
      setCurrentAmount(440);
    } else if (isMediumScreen) {
      setCurrentAmount(700);
    } else {
      setCurrentAmount(300);
    }
  }, [isMediumScreen, isLargeScreen, isXLScreen]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = currentAmount;
    
    scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
    });
  };

  const updateButtonState = () => {
    if(!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsLeftDisabled(scrollLeft <= 0);
    setIsRightDisabled(scrollLeft + clientWidth + currentAmount / 2 >= scrollWidth);
  }

  useEffect(() => {
    updateButtonState();
    scrollContainerRef.current.addEventListener('scroll', updateButtonState);

    return () => scrollContainerRef.current.removeEventListener('scroll', updateButtonState);
  }, []);

  return (
    <section className="flex flex-col mt-[20px]">
        
        <div className="flex flex-row items-center justify-between px-[24px] lg:px-[48px] mb-[12px]">
            
            <h1 className="text-[24px] font-medium">
                Shop Our Icons
            </h1>

            <div className="hidden sm:flex flex-row gap-3 justify-center items-center">

                <button 
                    onClick={() => scroll('left')}
                    disabled={isLeftDisabled}
                    className={`p-3 rounded-full ${isLeftDisabled ? 'bg-[#f5f5f5ff] text-[#a7a7a8ff] cursor-default' : 'bg-[#e6e6e6ff]'}`}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                </button>

                <button
                    onClick={() => scroll('right')}
                    disabled={isRightDisabled}
                    className={`p-3 rounded-full ${isRightDisabled ? 'bg-[#f5f5f5ff] text-[#a7a7a8ff] cursor-default' : 'bg-[#e6e6e6ff]'}`}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                </button>
            </div>

        </div>

        <div 
            ref={scrollContainerRef}
            className="pb-[30px] px-[24px] lg:px-[48px] w-full flex flex-row flex-nowrap gap-3 overflow-x-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-[#8c8c8cff]">
            {SHOP_ICONS.map((item, index) => (
                <a href={item.href} key={index} className="relative w-[300px] h-[300px] md:w-[680px] md:h-[465px] lg:w-[440px] lg:h-[300px] xl:w-[570px] xl:h-[390px] object-cover flex-shrink-0">
                    <img src={item.image} alt={item.title} className={`object-cover w-full h-full md:w-[680px] md:h-[465px] lg:w-[440px] lg:h-[300px] xl:w-[570px] xl:h-[390px]`}/>
                    <a href={item.href} className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 bg-white rounded-full text-black hover:bg-[#bdbdbdff] px-[16px] py-[6px] font-medium">{item.title}</a>
                </a>
            ))}
        </div>

    </section>
  )
}

export default ShopIcons

