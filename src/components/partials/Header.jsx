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


 
  const [show, setShow] = useState(false);
  
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

        <button onClick={() => setShow(!show)} 
              className="ml-auto text-inherit bg-black text-center text-blue-gray-50   focus:bg-black active:bg-black lg:hidden px-2 py-2 rounded-lg"
           > 
             {show ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6  text-cool-gray-50" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6 text-cool-gray-50" />
          )}
           </button>

            {
              show ? <div className=" w-5/6 absolute  mt-64 -mb-32 ml-10 items-center p-6 bg-white rounded shadow-xl">

                         {/* Site Route */}
               <ul className='ml-2 py-4 justify-center'>
            <li className='mb-2 border-black border-solid border-b-2 items-center justify-center text-center '>
            <a href="#About" className=" text-black gap-4  transition duration-150 ease-in-out">About Exa Realestate</a>
              </li>
            
              <li className='mb-2 border-black border-solid border-b-2 items-center justify-center text-center '>
                <a href="#ceotalk" className="text-black gap-2 transition duration-150 ease-in-out">Ceo_talk </a>
              </li>

              <li className='mb-2 border-black border-solid border-b-2 items-center justify-center text-center '>
                <a href="#reviews" className="text-black gap-2 items-center transition duration-150 ease-in-out"> Reviews</a>
              </li>

              <li className='mb-2 border-black border-solid border-b-2 items-center justify-center text-center '>
                <a href="#coachingtips" className="text-black gap-2 items-center transition duration-150 ease-in-out"> Coaching_tips</a>
              </li>
            </ul>

          {/* Site navigation */}
          <nav>
            <ul className="items-center text-center">

            <li className='mb-4 text-center'>
                <a href="https://t.me/+KJXgmnTrtyc0OTRk" className="justify-center text-center  font-medium rounded-md ml-3 bg-blue  text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center ">Join Telegram</a>
              </li>

              <li  className='text-center' >
                <Link to="/login" className="justify-center text-center  font-medium rounded-md ml-3 text-gray-600 hover:text-gray-900 px-5 py-2 flex items-center  bg-green ">Login</Link>
              </li>
            </ul>
   
          </nav>
             
            </div>:null
               }


        </div>
      </div>
    </header>
  );
}

export default Header;















