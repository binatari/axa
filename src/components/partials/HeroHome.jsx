import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Modal from '../../utils/Modal';

// import HeroImage from '../../images/hero-image.png';

function HeroHome() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <section className="relative bg-red ">
  
      <div data-aos="fade-in" className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-2">

          {/* Section header */}
          <div id='About' className="text-center pb-12 md:pb-16">
          <img 
               alt="Phone Image"
               src="/img/phone.png"
               width="120px"
               height="120px"
               className="mx-auto px-4 hover:transition-transform"
                />
            <h1 className=" text-cool-gray-50 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Get Early Access</h1>
            <div className="text-cool-gray-50 max-w-3xl mx-auto">
                 <button className="bg-green rounded-md py-2 px-4 mb-3" >
                  <a className=" btn text-gray-600  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account">Apply</a>
                </button>

                <div>
                <strong 
                variant="h1"
                className="text-cool-gray-50 text-xl text-gray-600 mb-8"
                > About Exa RealEstate</strong> <br />
                Exa RealEstate is a Google powered real estate Platform.
                <br />
                Among the many ways to invest your money in 2023, investing in real estate remains the best path to reliably grow your capital with very little risk.
                </div>
           
            </div>
          </div>

          {/* Hero Features */}
          <div className= "grid grid-cols-1 gap-6 md:relative md:-top-1 md:grid-cols-3 lg:grid-cols-3" data-aos="fade-up">
            <div className=' text-white bg2 rounded-md  items-center justify-center text-center'>
              <h2 
                className=" p-4 text-2xl text-white mb-4">
               THE ONLY INVESTMENT YOU NEED </h2>
             <span>
              Ninety Percent (90%) of all Millionaires become so through owning real estate
             </span> <br />
             <a className='p-auto border-white border-solid rounded-md  bg-black text-white items-center justify-center ' href="/login"> Choose Your Investment</a>
            </div>

            <div className='text-white bg3 rounded-md  items-center justify-center text-center'>
              <h2 
                className="p-4 text-2xl text-black text-gray-600 mb-4">
               RELIABLE</h2>
             <span>
              Invest with confidence on the world's fastest and Most secure Real Estate
             </span> <br />
             <a className='p-auto border-white border-solid rounded-md  bg-black text-white items-center justify-center ' href="/login"> Choose Your Investment</a>   
            </div>


            <div className='text-white bg1 rounded-md  items-center justify-center text-center'>
              <h2 
                className="p-4  text-2xl text-white text-gray-600 mb-4">
               GROWTH</h2>
             <span>           
             A lot of people become property investors because of capital growth
             </span> <br />
             <a className='p-auto border-white border-solid rounded-md  bg-black text-white items-center justify-center ' href="/login"> Choose Your Investment</a>     
            </div>

          </div>
        

        </div>

      </div>
    </section>
  );
}

export default HeroHome;