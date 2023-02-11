import React from 'react';

// import TestimonialImage from '../../images/testimonial.jpg';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-8">
            <h2 className=" text-3xl mb-4"> COACHING TIPS</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-10" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src="/img/coaching.jpg" width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “The bigger Your investment the bigger your profit. Let me explain,  investing US$50,000 in a residential property with a 7% weekly interest  will give you a stable profit of US$3,500 weekly. VS investing US$500, which is a stable profit of US$35 weekly. So in general, profitable investments all comes down to the amount invested.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">ExaRealEstate</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> 
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials;