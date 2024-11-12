import NikeLogo from '../assets/NikeLogo.png';
import { useState, useEffect, useRef } from 'react';
import { KIDS_ACCESORIES, KIDS_BY_AGE, KIDS_CLOTHING, KIDS_FEATURED, KIDS_SHOES, MEN_CLOTHING, MEN_DISCOVER_ACCESORIES, MEN_DISCOVER_SPORT, MEN_FEATURED, MEN_SHOES, NEW_FEATURED_DISCOVER_SPORT, NEW_FEATURED_FEATURED, NEW_FEATURED_SHOP_ICONS, NEW_FEATURED_TRENDING, OFFERS_KIDS, OFFERS_MEN, OFFERS_OFFERS, OFFERS_SPORT, OFFERS_WOMEN, SEARCH_POPULAR, WOMEN_CLOTHING, WOMEN_DISCOVER_ACCESORIES, WOMEN_DISCOVER_SPORT, WOMEN_FEATURED, WOMEN_SHOES } from '../constants';

const NavBar2 = () => {

  const [searchValue, setSearchValue] = useState('');

  const [items, setItems] = useState(0);

  // Handler to update the input field
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Handler to clear the input field
  const clearSearch = () => {
    setSearchValue('');
  };

  // Submit handler (optional for now)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchValue);
    // You can add logic to perform the search
  };


  // Display New & Features Menu

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const handleFeatureMouseEnter = () => {
    displayFeatureDialog();
  }

  const handleFeatureMouseLeave = () => {
    removeFeatureDialog();
  }

  const displayFeatureDialog = () => {
    setIsFeaturesOpen(true);
  }

  const removeFeatureDialog = () => {
    setIsFeaturesOpen(false);
  }

  // ------------------------------

    // Display Men Menu

    const [isMenOpen, setIsMenOpen] = useState(false);

    const handleMenMouseEnter = () => {
      displayMenDialog();
    }
  
    const handleMenMouseLeave = () => {
      removeMenDialog();
    }
  
    const displayMenDialog = () => {
      setIsMenOpen(true);
    }
  
    const removeMenDialog = () => {
      setIsMenOpen(false);
    }
  
    // ------------------------------

    // Display Women Menu

    const [isWomenOpen, setIsWomenOpen] = useState(false);

    const handleWomenMouseEnter = () => {
      displayWomenDialog();
    }
  
    const handleWomenMouseLeave = () => {
      removeWomenDialog();
    }
  
    const displayWomenDialog = () => {
      setIsWomenOpen(true);
    }
  
    const removeWomenDialog = () => {
      setIsWomenOpen(false);
    }
  
    // ------------------------------

    // Display Kids Menu

    const [isKidsOpen, setIsKidsOpen] = useState(false);

    const handleKidsMouseEnter = () => {
      displayKidsDialog();
    }
  
    const handleKidsMouseLeave = () => {
      removeKidsDialog();
    }
  
    const displayKidsDialog = () => {
      setIsKidsOpen(true);
    }
  
    const removeKidsDialog = () => {
      setIsKidsOpen(false);
    }
  
    // ------------------------------

    // Display Offers Menu

    const [isOffersOpen, setIsOffersOpen] = useState(false);

    const handleOffersMouseEnter = () => {
      displayOffersDialog();
    }
  
    const handleOffersMouseLeave = () => {
      removeOffersDialog();
    }
  
    const displayOffersDialog = () => {
      setIsOffersOpen(true);
    }
  
    const removeOffersDialog = () => {
      setIsOffersOpen(false);
    }
  
    // ------------------------------

    // Display Search Menu

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const searchClickHandler = () => {
      setIsSearchOpen(true);
    }

    const searchCancelHandler = () => {
      setIsSearchOpen(false);
    }

    // ------------------------------

      // Display Mobile Menu and Navigation

      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const menuClickHandler = () => {
        setIsMobileMenuOpen(true);
        setCurrentPage('main');
      }
  
      const menuCancelHandler = () => {
        setIsMobileMenuOpen(false);
      }

      //#####

      const [currentPage, setCurrentPage] = useState('main');

      const goToPage = (page) => {
        setCurrentPage(page);
      };

      const returnToAll = () => {
        setCurrentPage('main');
      }

    // ------------------------------

    // Mobile menu default scroll position

    const menuRef = useRef(null);

    useEffect(() => {
      if (isMobileMenuOpen && menuRef.current) {
        // Scroll to top when the menu opens
        window.scrollTo(0, 0);
        menuRef.current.scrollTo(0, 0);
      }
    }, [isMobileMenuOpen]);

    // -------------------------------

    // Sticky nav bar functionality

    const [showNavBar, setShowNavBar] = useState(true);

    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 35) {
        setShowNavBar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    useEffect(() => {

      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, [lastScrollY]);

    // -------------------------------

    // Disable scrolling on the main page 

    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling on the main page
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling on the main page
      }
  
      // Cleanup function to ensure scrolling is restored if component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isMobileMenuOpen]);

    useEffect(() => {
      if (isSearchOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling on the main page
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling on the main page
      }
  
      // Cleanup function to ensure scrolling is restored if component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isSearchOpen]);

    // -------------------------------

    
  return (
    <section className={`w-full z-10 bg-white h-[62px]`}>
      {lastScrollY > 35 && (
        <div className='w-full z-10 bg-white h-[62px]'>
        </div>
      )}
      <div className={`flex flex-row w-full justify-between items-center z-10 bg-white h-[62px] transition-all duration-500 ${
        showNavBar ? "translate-y-0" : "-translate-y-full" } ${lastScrollY > 35 ? 'top-0 fixed' : 'relative'}`}>
        <a href="https://www.nike.com/fi/?_gl=1*zzv5yi*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds" className="md:ml-10 ml-4"><img src={NikeLogo} alt="Nike Logo" width="70px" /></a>

        {/* Navigation hover buttons */}

        <div className='hidden lg:flex flex-row bg-white justify-evenly items-center gap-6 ml-[12rem]'>

            <div className='h-[62px] flex items-center' onMouseEnter={handleFeatureMouseEnter} onMouseLeave={handleFeatureMouseLeave}>
              <a href='https://www.nike.com/fi/w/new-3n82y?_gl=1*1cto4k4*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds' className='font-semibold text-[1rem] hover:border-b-2 border-black h-[28px] mt-[2px]'>
                New & Featured
              </a>
            </div>

            <div className='h-[62px] flex items-center' onMouseEnter={handleMenMouseEnter} onMouseLeave={handleMenMouseLeave}>
              <a href='https://www.nike.com/fi/men?_gl=1*hr8i27*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds' className='font-semibold text-[1rem] hover:border-b-2 border-black h-[28px] mt-[2px]'>
                Men
              </a>
            </div>

            <div className='h-[62px] flex items-center' onMouseEnter={handleWomenMouseEnter} onMouseLeave={handleWomenMouseLeave}>
              <a href='https://www.nike.com/fi/women?_gl=1*1n1gqjw*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds' className='font-semibold text-[1rem] hover:border-b-2 border-black h-[28px] mt-[2px]'>
                Women
              </a>
            </div>

            <div className='h-[62px] flex items-center' onMouseEnter={handleKidsMouseEnter} onMouseLeave={handleKidsMouseLeave}>
              <a href='https://www.nike.com/fi/kids?_gl=1*1n1gqjw*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds' className='font-semibold text-[1rem] hover:border-b-2 border-black h-[28px] mt-[2px]'>
                Kids
              </a>
            </div>

            <div className='h-[62px] flex items-center' onMouseEnter={handleOffersMouseEnter} onMouseLeave={handleOffersMouseLeave}>
              <a href='https://www.nike.com/fi/w/sale-3yaep?_gl=1*gdrtqq*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds' className='font-semibold text-[1rem] hover:border-b-2 border-black h-[28px] mt-[2px]'>
                Offers
              </a>
            </div>

        </div>
        <div className='hidden lg:flex items-center justify-center mr-11 gap-1'>
        {/* Search bar */}

        <div className="hidden md:flex items-center justify-center" onClick={searchClickHandler}>
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center bg-[#f5f5f5ff] rounded-full w-[170px] h-[35px] hover:bg-[#e5e5e7] mr-3"
      >
        {/* Search Icon */}
        <button
          type="submit"
          aria-label="Search"
          className="px-[6px] text-black hover:bg-[#c8c8cb] bg-[#f5f5f5ff] rounded-full h-[35px]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
          </svg>
        </button>

        {/* Input Field */}
        <p
          className="bg-transparent focus:outline-none w-[120px] text-[#707073ff] font-medium text-[17px] mb-[2px] ml-[2px] cursor-text"
          onClick={searchClickHandler}
        >
          Search
        </p>

        {/* Clear Button */}
        {searchValue && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear Search"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-[#c8c8cb] bg-[#f5f5f5ff] rounded-full h-[35px]"
            
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              role="img"
              width="20px"
              height="20px"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path>
            </svg>
          </button>
        )}
      </form>
    </div>

    <div className='hidden lg:flex justify-center items-center'>
    <abbr title="Favourites">
      <a href='https://www.nike.com/fi/favorites?_gl=1*126lspu*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds'>
        <button className='hover:bg-[#e6e6e6ff] rounded-full p-[6px]'>
          <svg aria-hidden="true" 
           focusable="false" 
           viewBox="0 0 24 24" 
           role="img" 
           width="24px" 
           height="24px" 
           fill="none"
          >
            <path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
          </svg>
        </button>
      </a>
      </abbr>
    </div>

    <div className='hidden md:flex justify-center items-center'>
    <abbr title={`Bag items: ${items}`}>
      <a href='https://www.nike.com/fi/cart?_gl=1*udrjhx*_up*MQ..&gclid=EAIaIQobChMI9Lm77t2iiQMVRmiRBR0QaR2HEAAYASAAEgI2gPD_BwE&gclsrc=aw.ds'>
        <button className='hover:bg-[#e6e6e6ff] rounded-full p-[6px]'>
          <svg aria-hidden="true" 
           focusable="false" 
           viewBox="0 0 24 24" 
           role="img" 
           width="24px" 
           height="24px" 
           fill="none"
          >
          <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
          </svg>
        </button>
      </a>
      </abbr>
    </div>

        </div>

        {/* Menu for small screens */}

        <div className='lg:hidden flex justify-center items-center gap-1 mr-6'>

        <button
          type="submit"
          aria-label="Search"
          className="px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]"
          onClick={searchClickHandler}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
          </svg>
        </button>

        <button
          type="button"
          aria-label="Sign In"
          className="px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path stroke="currentColor" stroke-width="1.5" d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
          </svg>
        </button>

        <button
          type="button"
          aria-label="Bag Items"
          className="px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
            </svg>
        </button>

        <button
          type="button"
          aria-label="Menu"
          className="px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]"
          onClick={menuClickHandler}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width="25px"
            height="25px"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
            </svg>
        </button>

        </div>

        {/* Hover menu functionality
        New & Featured */}

        <div className={`absolute hidden lg:flex flex-row row-span-4 justify-center items-start gap-[4.5rem] bg-white w-full min-h-[340px] top-[62px] opacity-0 ${isFeaturesOpen ? 'absolute opacity-100 translate-y-0' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-200`} onMouseEnter={displayFeatureDialog} onMouseLeave={removeFeatureDialog}>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8 mr-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Featured</a>
            {NEW_FEATURED_FEATURED.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8 mr-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Shop Icons</a>
            {NEW_FEATURED_SHOP_ICONS.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8 mr-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Discover Sport</a>
            {NEW_FEATURED_DISCOVER_SPORT.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8 mr-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Trending</a>
            {NEW_FEATURED_TRENDING.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

        </div>

        {/* Hover menu functionality
        Men */}

        <div className={`z-10 absolute hidden lg:flex flex-row row-span-4 justify-center items-start gap-[4.5rem] bg-white w-full min-h-[340px] top-[62px] opacity-0 ${isMenOpen ? 'absolute opacity-100 translate-y-0' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-200`} onMouseEnter={displayMenDialog} onMouseLeave={removeMenDialog}>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Featured</a>
            {MEN_FEATURED.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Shoes</a>
            {MEN_SHOES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Clothing</a>
            {MEN_CLOTHING.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Discover Sport</a>
            {MEN_DISCOVER_SPORT.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Accessories and Equipment</a>
            {MEN_DISCOVER_ACCESORIES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

        </div>

        {/* Hover menu functionality
        Women */}

          <div className={`z-10 absolute hidden lg:flex flex-row row-span-4 justify-center items-start gap-[4.5rem] bg-white w-full min-h-[365px] top-[62px] opacity-0 ${isWomenOpen ? 'absolute opacity-100 translate-y-0' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-200`} onMouseEnter={displayWomenDialog} onMouseLeave={removeWomenDialog}>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Featured</a>
            {WOMEN_FEATURED.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Shoes</a>
            {WOMEN_SHOES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Clothing</a>
            {WOMEN_CLOTHING.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Discover Sport</a>
            {WOMEN_DISCOVER_SPORT.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Accessories and Equipment</a>
            {WOMEN_DISCOVER_ACCESORIES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

        </div>

        {/* Hover menu functionality
        Kids */}

          <div className={`z-10 absolute hidden lg:flex flex-row row-span-4 justify-center items-start gap-[4.5rem] bg-white w-full min-h-[365px] top-[62px] opacity-0 ${isKidsOpen ? 'absolute opacity-100 translate-y-0' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-200`} onMouseEnter={displayKidsDialog} onMouseLeave={removeKidsDialog}>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Featured</a>
            {KIDS_FEATURED.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Shoes</a>
            {KIDS_SHOES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Clothing</a>
            {KIDS_CLOTHING.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Kids by age</a>
            {KIDS_BY_AGE.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Accessories and Equipment</a>
            {KIDS_ACCESORIES.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

        </div>

            {/* Hover menu functionality
        Offers */}

          <div className={`z-10 absolute hidden lg:flex flex-row row-span-4 justify-center items-start gap-[4.5rem] bg-white w-full min-h-[280px] top-[62px] pr-16 opacity-0 ${isOffersOpen ? 'absolute opacity-100 translate-y-0' : 'absolute opacity-0 pointer-events-none translate-y-[-10px]'} transform duration-200`} onMouseEnter={displayOffersDialog} onMouseLeave={removeOffersDialog}>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Offers</a>
            {OFFERS_OFFERS.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
                {item.title}
              </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Offers For Men</a>
            {OFFERS_MEN.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Offers For Women</a>
            {OFFERS_WOMEN.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Offers For Kids</a>
            {OFFERS_KIDS.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

          <div className='flex flex-col col-span-1 flex-shrink-0 justify-start items-start gap-1 font-medium text-[0.8rem] mt-8'>
            <a href="#" className='text-black font-medium mb-2 text-[0.9rem]' >Offers By Sport</a>
            {OFFERS_SPORT.map((item, index) => (
              <a href={item.href} key={index} className='mb-[3px] text-[#707073ff] hover:text-black'>
              {item.title}
            </a>
            ))}
          </div>

        </div>

        {/* // ----------------------------------------- */}

        {/* Dim overlay */}
        
        <div
          onClick={searchCancelHandler}
          className={`fixed h-[100vh] inset-0 bg-black opacity-0 z-[15] transition-opacity ease-in-out duration-1000 ${isSearchOpen ? "opacity-35 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        ></div>

        {/* //---------------- */}

        {/* Search Menu Appearing functionality */}

        <div className={`z-[20] absolute flex flex-col justify-start items-start gap-[30px] bg-white w-full h-[100vh] lg:h-[87vh] top-[35px] lg:top-0 opacity-0 ${lastScrollY > 35 ? 'lg:top-[35px]' : ''} ${isSearchOpen ? 'absolute opacity-100 -translate-y-[35px]' : 'absolute opacity-0 pointer-events-none'} transition-transform duration-200 ease-in-out`}>
            
            {/* Navbar search */}

            <div className='z-[20] flex flex-row row-span-3 w-full justify-between items-center mt-[10px] md:mt-[6px] md:gap-[9rem]'>
              
              <svg className={`md:block hidden ml-8 ${isSearchOpen ? 'translate-x-0' : 'translate-x-4'} transition-all duration-1000 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="88" height="46" viewBox="0 0 64 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7277 12.1511C15.999 12.598 14.4241 12.8196 13.0469 12.8196C11.3396 12.8196 9.94617 12.4728 8.97074 11.7793C4.02962 8.28845 8.54956 0.885548 9.06118 0.0629324C6.88551 2.37923 4.65235 4.80341 2.89851 7.44593C-0.0575023 11.9597 -0.812655 16.2475 0.910825 18.906C2.23896 20.9642 4.40042 22 7.37517 22C10.0146 22 13.2975 21.1832 17.1928 19.5559L64 0.0173385L63.9981 0L17.7277 12.1511Z" fill="#111111"></path></svg>

                <div className={`md:ml-0 ml-6 flex items-center justify-center flex-grow ${isSearchOpen ? 'translate-x-0' : 'translate-x-4'} transition-all duration-1000 ease-in-out`}>

                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center bg-[#f5f5f5ff] rounded-full w-full h-[35px] hover:bg-[#e5e5e7] mr-3"
                    >
                  {/* Search Icon */}
                      <button
                      type="submit"
                        aria-label="Search"
                        className="px-[6px] text-black hover:bg-[#c8c8cb] bg-[#f5f5f5ff] rounded-full h-[35px]"
                      >
                        <svg
                          aria-hidden="true"
                          role="img"
                          width="25px"
                          height="25px"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                        </svg>
                      </button>

                  {/* Input Field */}
                      <input
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        className="bg-transparent focus:outline-none text-black w-full placeholder-[#707073ff] font-medium text-[17px] mb-[2px] ml-[2px] cursor-text"
                        placeholder="Search"
                        onClick={searchClickHandler}
                      />

                  {/* Clear Button */}
                      {searchValue && (
                        <button
                          type="button"
                          onClick={clearSearch}
                          aria-label="Clear Search"
                          className="px-[6px] text-black hover:bg-[#c8c8cb] bg-[#f5f5f5ff] rounded-full h-[35px]"
                          
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            role="img"
                            width="25px"
                            height="25px"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path>
                          </svg>
                        </button>
                      )}
                    </form>
                  </div>

                  {/* Cancel button */}

                  <p className={`cursor-pointer md:mr-12 mr-6 font-semibold text-[1rem] text-black hover:text-[#707073ff] opacity-0 ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} transition-all transform duration-700 ease-in-out`} onClick={searchCancelHandler}>
                    Cancel
                  </p>

                </div>

                {/* Popular Search Section */}

                <div className={`flex flex-col w-[180px] h-[356px] ml-7 md:ml-[265px] bg-white justify-between items-start opacity-0 ${isSearchOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 ease-in-out`}>
                    <p className='mb-1 text-[14px] text-[#707073ff] font-normal'>
                      Popular Search Terms
                    </p>
                    {SEARCH_POPULAR.map((item, index) => (
                      <a href={item.href} key={index} className='font-medium text-[18px] hover:text-[#707073ff] text-black'>
                      {item.title}
                    </a>
                    ))}
                </div>
            
        </div>

        {/* // ----------------------------------------- */}

        {/* Dim overlay */}
        
        <div
          onClick={menuCancelHandler}
          className={`fixed h-[100vh] inset-0 bg-black opacity-0 z-20 transition-opacity ease-in-out duration-1000 ${isMobileMenuOpen ? "opacity-35 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        ></div>

        {/* //---------------- */}

        {/* Mobile Main Menu Appearing functionality */}

        <div ref={menuRef} className={`lg:hidden flex flex-col justify-start items-center fixed top-0 z-30 right-0 overflow-x-hidden overflow-auto w-[320px] h-[100vh] bg-white ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'} transition-transform duration-500 ease-in-out`}>

          
            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-0' : 'translate-x-[-320px] opacity-0 pointer-events-none'}`}>

                {/* Close button */}
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>
                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                </div>

                {/* Menu Items  */}

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[10px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('New&Featured')}>
                      <h3 className='font-semibold text-[24px] hover:text-[#707073ff]'>New & Featured</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('Men')} >
                      <h3 className='font-semibold text-[24px] hover:text-[#707073ff]'>Men</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('Women')}>
                      <h3 className='font-semibold text-[24px] hover:text-[#707073ff]'>Women</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('Kids')}>
                      <h3 className='font-semibold text-[24px] hover:text-[#707073ff]'>Kids</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('Offers')}>
                      <h3 className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>

                {/* Jordan wrapper */}

                <div className='flex flex-col justify-center items-start py-[24px] w-full'>
                    
                    <a href="#" className='flex items-center justify-start gap-2 w-full pl-[23px] py-[8px] pr-[23px]'>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="32px" height="32px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M13.182 3.733c-.012-.039-.012-.039-.012-.072a.966.966 0 01.922-1.007.97.97 0 011.007.922.964.964 0 01-.917 1.007c-.027.004-.062 0-.101 0-.016.004-.04.004-.056.022-.056.084.14.073-.005.44 0 0 0 .038-.012.077-.012.14-.08.562-.096.793.029.04.04.05.029.13a6.003 6.003 0 01-.09.534c-.04.14-.096.174-.147.202-.073.298-.095.545-.281.905-.022.276-.045.35-.106.484-.017.4.01.46-.281 1.101-.08.3-.017.507.05.821.068.321.276.461.298.793.05.771.017 1.305-.163 1.907l.135.348c.18.084.618.326.36.675.343.19.865.394 1.28.781.176.147.35.315.513.5.316.057.276.08.506.231.675.438 1.749 1.304 2.373 1.906.112.067.147.112.236.163.01.023.017.034.01.04-.026.072-.026.072-.06.14.039.04.095.073.134.107.04.005.04-.006.096-.017.079.073.18.135.214.135.106-.022.084-.005.185-.1.029-.035.084 0 .084 0 .04-.04.113-.119.214-.176.079-.045.23-.045.23-.045.052.006.04.051.029.073-.057.023-.18.057-.247.108-.152.14-.276.353-.276.353.299-.033.484.045.719.023.136-.005.237.006.377-.09 0 0 .14-.096.265-.14.118-.05.23-.017.33.062.069.084.119.084 0 .196-.044.045-.1.096-.18.17-.133.123-.313.291-.5.432a3.11 3.11 0 01-.527.315c-.338.23-.26.174-.523.394-.03.022-.124.078-.163.106-.107.062-.135.006-.197-.118 0 0-.028-.045-.08-.14-.05-.107-.09-.23-.072-.23-.062-.007-.331-.344-.331-.41-.063-.013-.304-.26-.31-.31l-.214-.18c-.253.044-.31-.113-.961-.608-.08-.006-.197-.05-.36-.174-.298-.253-1.007-.815-1.124-.883-.13-.067-.281-.134-.383-.214-.146-.022-.218-.05-.298-.067-.08-.022-.14-.057-.326-.079-.303-.045-.618-.18-.911-.337-.14-.073-.264-.107-.382-.169-.27-.124-.506-.236-.686-.28a2.148 2.148 0 01-.568-.226c-.061-.034-.095-.06-.134-.073-.09-.022-.153.006-.192.022-.23.108-.438.203-.636.31-.18.09-.348.186-.528.286a7.971 7.971 0 01-.534.254s-.534.253-.832.348c-.26.197-.787.546-1.107.715-.158.073-.467.252-.608.292-.08.061-.371.258-.596.421-.18.124-.31.231-.31.231-.106.084-.101.13-.28.045a1.491 1.491 0 00-.13.096c-.14.095-.146.073-.202.067-.101.08-.113.04-.197.13-.061.084 0 .061-.118.106-.028.006-.04.04-.057.056-.094.073-.1.293-.325.304-.135.09-.107.203-.197.191 0 .102-.18.23-.214.23-.292.096-.304-.118-.646.035-.045.016-.113.072-.197.084-.152.022-.332-.006-.444-.102a1.93 1.93 0 01-.326-.398c-.051-.13-.017-.208.163-.332.073-.045.084-.079.208-.084.06-.024.045.01.15-.024.064-.016.064-.005.193-.005.028-.017.067-.022.124-.045.1-.034.196-.062.196-.062s.028-.023.124-.01c.078-.035.169-.08.214-.097-.012-.124.005-.124.06-.174.08-.062.09-.05.148-.01.022-.007.039-.013.027-.035-.01-.073-.061-.107-.045-.247-.022-.057-.061-.129-.05-.174.01-.045.028-.069.056-.079.029-.012.045.006.057.022.028.034.05.135.05.135.006.118.04.26.152.18.067-.062.084-.242.214-.203l.096.085c.084-.073.084-.073.14-.107 0 0-.08-.073-.012-.135.045-.039.108-.067.208-.175.276-.292.422-.42.714-.657a6.811 6.811 0 011.699-.939c.146-.174.28-.286.585-.304.377-.606 1.085-1.136 1.248-1.22.134-.23.19-.208.365-.247.135-.107.175-.107.23-.214.063-.23-.112-.86.383-.877.112-.146.078-.112.196-.248a2.19 2.19 0 01-.118-.5c-.005-.016-.196-.157-.13-.332a2.33 2.33 0 01-.268-.432.202.202 0 01-.063-.012c-.022-.005-.055-.005-.09-.005-.078.196-.163.208-.303.253-.26.512-.35.731-1.046 1.142-.28.298-.382.64-.382.634a.46.46 0 00-.012.321c-.045.107-.027.124-.027.124.01.045.056.106.106.112.079.023.169.023.158.118-.011.113-.163.09-.237.073-.275-.05-.185-.23-.365-.174-.141.085-.196.348-.416.31-.028-.023-.017-.074.006-.119.028-.06.084-.118.056-.14-.146.04-.433.123-.433.123-.135.04-.281-.039-.147-.124.063-.022.153-.05.265-.118 0 0 .062-.072-.057-.039a1.144 1.144 0 01-.416.045s-.257-.039-.292-.056c-.028-.022-.061-.107.017-.1a2.71 2.71 0 00.563-.068c.095-.035.28-.14.382-.186 0 0 .113-.157.18-.19.107-.114.19-.18.28-.299.09-.18.192-.46.5-.906a4.16 4.16 0 01.535-.646s.062-.338.343-.573c.063-.14.157-.31.259-.462a1.7 1.7 0 00.106-.168c.09-.13.186-.377.518-.41 0 0 .147-.102.197-.175.084-.073.074-.186.14-.259-.106-.106-.365-.309-.382-.573a.85.85 0 01.265-.692c.196-.185.398-.275.646-.258.309.055.366.157.455.258.09.101.13.04.163.146.259.073.248.045.237.236.045.057.106.108.1.214.085-.175.108-.208.344-.399.062-.157.1-.315.15-.478.052-.146.114-.298.154-.41-.04-.326.06-.377.196-.664-.022-.039-.016-.05-.006-.112.057-.192.136-.433.186-.596 0 0 .017-.063.085-.063.06-.202.157-.579.179-.663.062-.208.029-.287-.01-.41-.012-.04-.006-.09-.03-.136a5.483 5.483 0 01-.19-.41c-.028-.073-.08-.354-.08-.354-.004-.062-.004-.09-.004-.09z" clip-rule="evenodd"></path></svg>
                      <p className='font-semibold text-[16px] font-sans'>Jordan</p>
                    </a>

                </div>

                {/* Sign in wrapper  */}

                <div className='flex flex-col justify-start items-start py-[50px] px-[36px] w-full'>
                    
                    <h4 className='text-[20px] text-[#707072] tracking-tight font-semibold leading-tight'>
                      Become a Nike Member for the best products, inspiration and stories in sport.
                      <a href='#' className='text-[#111111] font-semibold'> Learn more</a>
                    </h4>

                    <div className='flex flex-row row-span-2 justify-center items-start mt-[24px]'>
                        
                        <button className='bg-black px-[18px] py-[7px] rounded-full hover:bg-[#707073ff] transition-tranform duration-1000 ease-in-out'>
                          <a href="#" className='text-white font-medium'>Join Us</a>
                        </button>

                        <button className='bg-white px-[18px] py-[7px] rounded-full border border-[#ccccccff] hover:bg-[#707073ff] ml-2 transition-tranform duration-1000 ease-in-out'>
                          <a href="#" className='text-black font-medium'>Sign In</a>
                        </button>

                    </div>

                </div>

                {/* Help Menu Wrapper */}

                <div className='w-full flex flex-col justify-center items-start pt-[24px] pb-[150px]'>
                        
                        <a href="#" className='py-[8px] pr-[24px] pl-[30px] flex flex-row justify-start items-center w-full'>
                          <svg className='mr-[12px]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" count="0"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M11.99 18v-1.5M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15m9.75-3c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z"></path></svg>
                          <p className='text-16px font-medium pb-[3px]'>Help</p>
                        </a>

                        <a href="#" className='py-[8px] pr-[24px] pl-[30px] flex flex-row justify-start items-center w-full'>
                          <svg className='mr-[12px]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                          <p className='text-16px font-medium pb-[3px]'>Bag</p>
                        </a>

                        <a href="#" className='py-[8px] pr-[24px] pl-[30px] flex flex-row justify-start items-center w-full'>
                          <svg className='mr-[12px]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" count="0"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M12 13.5v-7c0-1.74 1.01-2.75 2.25-2.75h4.39l1.61 6m0 0H3.75m16.5 0v10.5H3.75V9.75m0 0l1.61-6h5.14"></path></svg>
                          <p className='text-16px font-medium pb-[3px]'>Orders</p>
                        </a>

                        <a href="#" className='py-[8px] pr-[24px] pl-[30px] flex flex-row justify-start items-center w-full'>
                        <svg className='mr-[12px]' aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none" count="0"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25m4.5 13.25v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path></svg>
                          <p className='text-16px font-medium pb-[3px]'>Find a Store</p>
                        </a>

                </div>
            </div>
          

          {/* New & Featured Menu  */}

          
            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'New&Featured' ? 'translate-x-0' : 'opacity-0 pointer-events-none'} ${currentPage === 'FeaturedFeatured' || currentPage === 'FeaturedShopIcons' || currentPage === 'FeaturedDiscoverSport' || currentPage === 'FeaturedTrending' ? 'translate-x-[-320px] opacity-0 pointer-events-none' : ''}`}>
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>

                  <svg onClick={returnToAll} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                  <p className='text-[16px] font-medium pr-[200px] pl-[10px]' onClick={returnToAll}>All</p>

                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                
                </div>

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>New & Featured</a>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('FeaturedFeatured')} >
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Featured</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('FeaturedShopIcons')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Shop Icons</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('FeaturedDiscoverSport')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Discover Sport</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('FeaturedTrending')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Trending</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'New&Featured' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'FeaturedFeatured' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('New&Featured')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[100px] pl-[10px]' onClick={() => setCurrentPage('New&Featured')}>New & Featured</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Featured</a>
                  </button>

                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[16px] text-[#707073ff]'>Shop All New Arrivals</a>
                  </button>

                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[16px] text-[#707073ff]'>Best Sellers</a>
                  </button>

                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[16px] text-[#707073ff]'>SNKRS Launch Calendar</a>
                  </button>

                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[16px] text-[#707073ff]'>Weather-Ready Gear</a>
                  </button>
                  
              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'New&Featured' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'FeaturedShopIcons' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('New&Featured')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[100px] pl-[10px]' onClick={() => setCurrentPage('New&Featured')}>New & Featured</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Shop Icons</a>
                  </button>

                  {NEW_FEATURED_SHOP_ICONS.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'New&Featured' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'FeaturedDiscoverSport' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('New&Featured')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[100px] pl-[10px]' onClick={() => setCurrentPage('New&Featured')}>New & Featured</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Discover Sport</a>
                  </button>

                  {NEW_FEATURED_DISCOVER_SPORT.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'New&Featured' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'FeaturedTrending' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('New&Featured')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[100px] pl-[10px]' onClick={() => setCurrentPage('New&Featured')}>New & Featured</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Trending</a>
                  </button>

                  {NEW_FEATURED_TRENDING.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

          {/* -------------------- */}

          {/* Men Menu  */}
          
            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'Men' ? 'translate-x-0' : 'opacity-0 pointer-events-none'} ${currentPage === 'MenFeatured' || currentPage === 'MenShoes' || currentPage === 'MenClothing' || currentPage === 'MenDiscoverSport' || currentPage === 'MenAccessories' ? 'translate-x-[-320px] opacity-0 pointer-events-none' : ''}`}>
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>

                  <svg onClick={returnToAll} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                  <p className='text-[16px] font-medium pr-[200px] pl-[10px]' onClick={returnToAll}>All</p>

                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                
                </div>

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Men</a>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('MenFeatured')} >
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Featured</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('MenShoes')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Shoes</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('MenClothing')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Clothing</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('MenDiscoverSport')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Discover Sport</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('MenAccessories')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff] w-[170px] text-start'>Accessories and Equipment</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>
            
            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Men' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'MenFeatured' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Men')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[186px] pl-[10px]' onClick={() => setCurrentPage('Men')}>Men</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Featured</a>
                  </button>

                  {MEN_FEATURED.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>
          
            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Men' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'MenShoes' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Men')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[186px] pl-[10px]' onClick={() => setCurrentPage('Men')}>Men</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Men Shoes</a>
                  </button>

                  {MEN_SHOES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Men' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'MenClothing' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Men')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[186px] pl-[10px]' onClick={() => setCurrentPage('Men')}>Men</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Men Clothing</a>
                  </button>

                  {MEN_CLOTHING.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Men' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'MenDiscoverSport' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Men')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[186px] pl-[10px]' onClick={() => setCurrentPage('Men')}>Men</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Discover Sport</a>
                  </button>

                  {MEN_DISCOVER_SPORT.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Men' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'MenAccessories' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Men')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[186px] pl-[10px]' onClick={() => setCurrentPage('Men')}>Men</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff] text-left leading-tight'>Accessories and Equipment</a>
                  </button>

                  {MEN_DISCOVER_ACCESORIES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[100px] w-full text-left'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

          {/* -------------------- */}
          
          {/* Women Menu  */}

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'Women' ? 'translate-x-0' : 'opacity-0 pointer-events-none'} ${currentPage === 'WomenFeatured' || currentPage === 'WomenShoes' || currentPage === 'WomenClothing' || currentPage === 'WomenDiscoverSport' || currentPage === 'WomenAccessories' ? 'translate-x-[-320px] opacity-0 pointer-events-none' : ''}`}>
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>

                  <svg onClick={returnToAll} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                  <p className='text-[16px] font-medium pr-[200px] pl-[10px]' onClick={returnToAll}>All</p>

                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                
                </div>

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Women</a>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('WomenFeatured')} >
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Featured</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('WomenShoes')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Shoes</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('WomenClothing')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Clothing</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('WomenDiscoverSport')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Discover Sport</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('WomenAccessories')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff] w-[170px] text-start'>Accessories and Equipment</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>
            
            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Women' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'WomenFeatured' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Women')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[160px] pl-[10px]' onClick={() => setCurrentPage('Women')}>Women</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Featured</a>
                  </button>

                  {WOMEN_FEATURED.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Women' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'WomenShoes' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Women')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[160px] pl-[10px]' onClick={() => setCurrentPage('Women')}>Women</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Shoes</a>
                  </button>

                  {WOMEN_SHOES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Women' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'WomenClothing' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Women')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[160px] pl-[10px]' onClick={() => setCurrentPage('Women')}>Women</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Clothing</a>
                  </button>

                  {WOMEN_CLOTHING.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Women' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'WomenDiscoverSport' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Women')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[160px] pl-[10px]' onClick={() => setCurrentPage('Women')}>Women</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Discover Sport</a>
                  </button>

                  {WOMEN_DISCOVER_SPORT.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Women' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'WomenAccessories' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Women')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[160px] pl-[10px]' onClick={() => setCurrentPage('Women')}>Women</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff] text-left leading-tight'>Accessories and Equipment</a>
                  </button>

                  {WOMEN_DISCOVER_ACCESORIES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[100px] w-full text-left'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>
          
          {/* -------------------- */}

          {/* Kids Menu  */}

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'Kids' ? 'translate-x-0' : 'opacity-0 pointer-events-none'} ${currentPage === 'KidsFeatured' || currentPage === 'KidsShoes' || currentPage === 'KidsClothing' || currentPage === 'KidsByAge' || currentPage === 'KidsAccessories' ? 'translate-x-[-320px] opacity-0 pointer-events-none' : ''}`}>
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>

                  <svg onClick={returnToAll} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                  <p className='text-[16px] font-medium pr-[200px] pl-[10px]' onClick={returnToAll}>All</p>

                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                
                </div>

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Kids</a>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('KidsFeatured')} >
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Featured</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('KidsShoes')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Shoes</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('KidsClothing')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Clothing</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('KidsByAge')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Kids by age</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('KidsAccessories')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff] w-[170px] text-start'>Accessories and Equipment</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>
            
            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Kids' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'KidsFeatured' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Kids')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[185px] pl-[10px]' onClick={() => setCurrentPage('Kids')}>Kids</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Featured</a>
                  </button>

                  {KIDS_FEATURED.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Kids' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'KidsShoes' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Kids')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[185px] pl-[10px]' onClick={() => setCurrentPage('Kids')}>Kids</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Shoes</a>
                  </button>

                  {KIDS_SHOES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Kids' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'KidsClothing' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Kids')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[185px] pl-[10px]' onClick={() => setCurrentPage('Kids')}>Kids</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Clothing</a>
                  </button>

                  {KIDS_CLOTHING.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Kids' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'KidsByAge' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Kids')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[185px] pl-[10px]' onClick={() => setCurrentPage('Kids')}>Kids</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Kids by age</a>
                  </button>

                  {KIDS_BY_AGE.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Kids' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'KidsAccessories' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Kids')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[185px] pl-[10px]' onClick={() => setCurrentPage('Kids')}>Kids</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff] text-left leading-tight'>Accessories and Equipment</a>
                  </button>

                  {KIDS_ACCESORIES.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[100px] w-full text-left'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

          {/* -------------------- */}

          {/* Offers Menu  */}
          
            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'Offers' ? 'translate-x-0' : 'opacity-0 pointer-events-none'} ${currentPage === 'OffersOffers' || currentPage === 'OffersForMen' || currentPage === 'OffersForWomen' || currentPage === 'OffersForKids' || currentPage === 'OffersBySport' ? 'translate-x-[-320px] opacity-0 pointer-events-none' : ''}`}>
                
                <div className='flex justify-end items-center w-full p-2 mt-2'>

                  <svg onClick={returnToAll} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                  <p className='text-[16px] font-medium pr-[200px] pl-[10px]' onClick={returnToAll}>All</p>

                  <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                  </button>
                
                </div>

                <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px]'>
                    
                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers</a>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('OffersOffers')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Offers</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('OffersForMen')} >
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Offers For Men</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('OffersForWomen')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Offers For Women</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('OffersForKids')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Offers For Kids</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>

                    <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full' onClick={() => goToPage('OffersBySport')}>
                      <h3 className='font-semibold text-[16px] text-[#707073ff]'>Offers By Sport</h3>
                      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path></svg>
                    </button>
                    
                </div>
            
            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Offers' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'OffersOffers' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Offers')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[175px] pl-[10px]' onClick={() => setCurrentPage('Offers')}>Offers</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers</a>
                  </button>

                  {OFFERS_OFFERS.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Offers' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'OffersForMen' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Offers')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[175px] pl-[10px]' onClick={() => setCurrentPage('Offers')}>Offers</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers For Men</a>
                  </button>

                  {OFFERS_MEN.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff] text-left pr-[100px]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Offers' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'OffersForWomen' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Offers')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[175px] pl-[10px]' onClick={() => setCurrentPage('Offers')}>Offers</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers For Women</a>
                  </button>

                  {OFFERS_WOMEN.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff] text-left pr-[100px]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Offers' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'OffersForKids' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Offers')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[175px] pl-[10px]' onClick={() => setCurrentPage('Offers')}>Offers</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers For Kids</a>
                  </button>

                  {OFFERS_KIDS.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff] text-left pr-[100px]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

            <div className={`flex flex-col justify-start items-center w-[320px] h-[100vh] absolute top-0 right-0 transition-all duration-500 ease-in-out ${currentPage === 'main' || currentPage === 'Offers' ? 'translate-x-[320px] opacity-0 pointer-events-none' : ''} ${currentPage === 'OffersBySport' ? 'translate-x-0' : 'opacity-0 pointer-events-none'}`}>
                
              <div className='flex justify-end items-center w-full p-2 mt-2'>

                <svg onClick={() => setCurrentPage('Offers')} aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path></svg>

                <p className='text-[16px] font-medium pr-[175px] pl-[10px]' onClick={() => setCurrentPage('Offers')}>Offers</p>

                <button className='mr-2 px-[6px] text-black hover:bg-[#c8c8cb] rounded-full h-[35px]' onClick={menuCancelHandler}>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972m0-13.945l13.944 13.945"></path></svg>
                </button>
              
              </div>

              <div className='flex flex-col justify-center items-start w-full py-[24px] gap-[22px] pb-[150px]'>
                  
                  <button className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                    <a href='#' className='font-semibold text-[24px] hover:text-[#707073ff]'>Offers By Sport</a>
                  </button>

                  {OFFERS_SPORT.map((item, index) => (
                    <button key={index} className='flex flex-row justify-between items-center pl-[34px] pr-[23px] w-full'>
                      <a href={item.href} className='font-semibold text-[16px] text-[#707073ff] text-left pr-[100px]'>{item.title}</a>
                    </button>
                  ))}

              </div>

            </div>

          {/* -------------------- */}
          
        </div>
        </div>
    </section>
  )
}

export default NavBar2
