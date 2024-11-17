import { NIKE_MEMBERSHIP } from "../constants"
import { useRef, useState, useEffect } from "react";
import useMediaQuery from "../constants/useMediaQuery";

const NikeMembership = () => {

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
      setCurrentAmount(394);
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
                Nike Membership
            </h1>

            <div className="hidden sm:flex flex-row gap-3 justify-center items-center">

                <button 
                    onClick={() => scroll('left')}
                    disabled={isLeftDisabled}
                    className={`p-3 rounded-full ${isLeftDisabled ? 'bg-[#f5f5f5ff] text-[#a7a7a8ff] cursor-default' : 'bg-[#e6e6e6ff]'}`}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>
                </button>

                <button
                    onClick={() => scroll('right')}
                    disabled={isRightDisabled}
                    className={`p-3 rounded-full ${isRightDisabled ? 'bg-[#f5f5f5ff] text-[#a7a7a8ff] cursor-default' : 'bg-[#e6e6e6ff]'}`}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                </button>

            </div>

        </div>

        <div 
            ref={scrollContainerRef}
            className="pb-[30px] px-[24px] lg:px-[48px] w-full flex flex-row flex-nowrap gap-3 h-[345px] sm:h-[345px] md:h-[725px] lg:h-[425px] xl:h-[615px] overflow-x-scroll scrollbar-none hover:scrollbar scrollbar-track-transparent scrollbar-thumb-[#8c8c8cff]">
            {NIKE_MEMBERSHIP.map((item, index) => (
                <a href={item.href} key={index} className="relative w-[300px] h-[300px] md:w-[680px] md:h-[680px] lg:w-[380px] lg:h-[380px] xl:w-[570px] xl:h-[570px] object-cover flex-shrink-0">
                    <img src={item.image} alt={item.title} className={`object-cover w-[300px] h-[300px] md:w-[680px] md:h-[680px] lg:w-[380px] lg:h-[380px] xl:w-[570px] xl:h-[570px]`}/>
                    <div className="absolute flex gap-2 flex-col left-6 bottom-[5.3rem] md:left-6 md:bottom-[5.3rem] lg:left-12 lg:bottom-[6.8rem]">
                      <p className="text-white text-[16px] font-medium">{item.category}</p>
                      <p className="text-white text-[24px] font-medium pr-[2.8rem] leading-7">{item.title}</p>
                    </div>
                    <div className="absolute flex flex-row gap-2 bottom-6 left-6 md:bottom-6 md:left-6 lg:bottom-12 lg:left-12">
                      <a href={item.href} className="bg-white rounded-full text-black hover:bg-[#bdbdbdff] px-[16px] py-[6px] font-medium">{item.buttonTitle}</a>
                      {item.buttonTitle2 ? 
                        <a href={item.href} className="bg-white rounded-full text-black hover:bg-[#bdbdbdff] px-[16px] py-[6px] font-medium">{item.buttonTitle2}</a>
                        : ''
                      }
                      </div>
                </a>
            ))}
        </div>

    </section>
  )
}

export default NikeMembership




