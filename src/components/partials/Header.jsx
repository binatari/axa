import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  


  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white  backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
            <h1 className='text-cool-gray-300 hover:text-black px-5' >EXA_REAL_ESTATE</h1>           
           </Link>
          </div>


          
               {/* Site Route */}
               <ul className='hidden lg:flex items-center  lg:flex-wrap ml-32 '>
            <li>
            <a href="#About" className=" text-cool-gray-300 hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out">ABOUT</a>
              </li>
            
              <li>
                <a href="#ceotalk" className="text-cool-gray-300 hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out">CEO_TALK </a>
              </li>

              <li>
                <a href="#reviews" className="text-cool-gray-300  hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"> REVIEWS</a>
              </li>

              <li>
                <a href="#coachingtips" className="text-cool-gray-300 hover:text-black px-5 py-3 flex items-center transition duration-150 ease-in-out"> COACHING_TIPS</a>
              </li>
            </ul>

          {/* Site navigation */}
          <nav className=" hidden  lg:flex lg:flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/login" className="font-medium bg-green rounded-md text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>

              <li>
                <a href="https://t.me/+KJXgmnTrtyc0OTRk" className="font-medium rounded-md ml-3 bg-blue  text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Telegram</a>
              </li>
            </ul>
   
          </nav>

          <button
          size="sm"
          color="black"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        >
          {openNav ? (
            <XMarkIcon onClick={ () => setOpenNav(false)} className="h-6 w-6 text-cool-gray-300" />
          ) : (
            <Bars3Icon onClick={ (e) => {
              e.stopPropagation();
              setOpenNav(true);
            }} className="h-6 w-6 text-cool-gray-300" />
          )} 
        </button>


          {/* <button
          size="sm"
          color="black"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6 text-cool-gray-300" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-cool-gray-300" />
          )}
        </button> */}

        {/* <nav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
      </nav> */}

          {/* </nav> */}
     

 



     


        </div>
      </div>
    </header>
  );
}

export default Header;















