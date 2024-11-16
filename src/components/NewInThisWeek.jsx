import { NEW_IN_THIS_WEEK } from "../constants"
import { useRef, useState, useEffect } from "react";
import useMediaQuery from "../constants/useMediaQuery";

const NewInThisWeek = () => {

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
      setCurrentAmount(694);
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
                New In This Week
            </h1>

            <div className="hidden sm:flex flex-row gap-3 justify-center items-center">

                <a href="#" className="text-black font-medium text-[16px] hover:text-[#8c8c8cff]">Discover All</a>

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
            className="pb-[30px] px-[24px] lg:px-[48px] w-full flex flex-row flex-nowrap gap-3 overflow-x-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-[#8c8c8cff]">
            {NEW_IN_THIS_WEEK.map((item, index) => (
                <a href={item.href} key={index} className="relative w-[auto] h-[auto] md:w-[auto] md:h-[auto] lg:w-[auto] lg:h-[auto] xl:w-[570px] object-cover flex-shrink-0">
                    <img src={item.image} alt={item.title} className={`object-cover w-[300px] h-[300px] md:w-[680px] md:h-[680px] lg:w-[380px] lg:h-[380px] xl:w-[570px] xl:h-[570px]`}/>
                    <p className="mt-2 font-medium md:text-[14px] lg:text-[16px]">{item.title}</p>
                    <p className="text-[#707073ff] md:text-[14px] lg:text-[16px]">{item.category}</p>
                    <p className="font-medium mt-2 md:text-[14px] lg:text-[16px]">{item.price}</p>
                </a>
            ))}
        </div>

    </section>
  )
}

export default NewInThisWeek


