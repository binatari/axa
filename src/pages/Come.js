import React, {useEffect, useState} from "react";

import {  Button,  Label,
  Input } from '@windmill/react-ui'
// import {  Footer } from "../components/widgets/layout";
import FeatureCard from "../components/widgets/cards/feature-card";
import TeamCard from "../components/widgets/cards/team-card";
import { featuresData, teamData, contactData, contactData1, coaching } from "../data/data";


export function Home() {
  const [show, setShow] = useState(false);
  const {text} = contactData;
  return (
    <>
      <div className="relative flex h-full content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-red-900 bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto" data-aos="fade-in">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <img 
               alt="Phone Image"
               src="/img/phone.png"
               width="120px"
               height="120px"
               className="mx-auto px-4 hover:transition-transform"
               data-aos="zoom-in"
                />
              <h1
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Get Early Access <br />
               
                <a
            href="/sign-up"
            target="_blank"
            className="mb-2 block"
          >
            <Button className="bg-light-green-500">  Apply 
            </Button>
          </a>
              </h1>
              <span variant="lead" color="white" className="opacity-80">
                <div id="About">
                <strong 
                variant="h1"
                color="white"
                className="mb-6 font-black"
                > About Exa RealEstate</strong> <br />
                Exa RealEstate is a Google powered real estate Platform.
                <br />
                Among the many ways to invest your money in 2023, investing in real estate remains the best path to reliably grow your capital with very little risk.
                </div>
              
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:relative md:-top-1 md:grid-cols-3 lg:grid-cols-3" data-aos="fade-up">
            {featuresData.map(({ color, title, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                description={description}
              />
            ))}
          </div>
          <div id="capital-growth" className="mt-30 py-8 flex flex-wrap items-center">
          <div 
          className="mx-auto mt-2 flex w-full justify-center px-4  md:relative md:left-6 md:w-1/2 xl:relative xl:left-14  lg:mt-0 bg-gray-100 " 
          data-aos="fade-right"
          >
            <img alt="Card Image" src="/img/laptop1.png" height="200px" width="120px" className="h-full w-full" />
            </div>
            <div 
            className="mx-auto  -mt-8 w-full px-4 md:w-1/2 border-2 border-gray-300 hover:bg-[#5b0e0e] hover:text-cyan-50 md:relative md:right-6 md:py-9  xl:relative xl:right-20 xl:py-16" 
            data-aos="fade-left">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg ">
                {/* <UsersIcon className="h-6 w-6 text-blue-gray-900" /> */}
              </div>
              <h3
               className="mb-3 font-bold "
                color="blue-gray-300"
              >
                Capital Growth
              </h3>
              <span className="mb-8 font-normal"
              color="blue-gray-300"
              >
              A lot of people become property investors because of capital growth.
                <br />
                <br />
                Real Estate has produced some of the wealthiest individuals
                worldwide and have been, for a long time, a passive way of generating income.
              </span>

            </div>
            <div
            className=" w-full border-b-2 border-gray-900 divide-x-4 pt-3"
            ></div>
          </div>

          <div id="diversified-asset" className="mt-32 flex flex-wrap items-center">
            <div className="-28mx-auto -mt-8 w-full py-4 px-4 md:w-1/2 border-2 border-gray-300  hover:bg-[#5b0e0e]  hover:text-cyan-50 md:relative md:left-10 md:py-9  xl:relative xl:left-28 xl:py-16 " 
            data-aos="fade-right">
              <h3
                variant="h3"
                className="mb-3 font-bold"
              >
                Diversified Assets
              </h3>
              <span className="mb-8 font-normal">
              Investing in real estate makes your assets more diverse.You will see more financial benefits without risking too much.
                <br />
                <br />
                The best part of owning these properties is the market research involved. it means you can make informed decisions based on your desired location. <br /> <br />
                With these, you will have a volatile investment.it is vital consideration, more so when you are investing in the stock market.
              </span>
              <h3
                variant="h3"
                className="mb-3 font-bold"
              >
                Tax Benefits
              </h3>
              <soan className="mb-8 font-normal">
              When you own a property, you will quality for different tax deductions.
                <br />
              </soan>

            </div>
            <div className=" mx-auto mt-2 flex w-full justify-center py-8 px-4 lg:mt-0 md:relative md:-right-6 md:w-1/2 xl:relative xl:right-4 xl:w-4/12  bg-gray-100"
             data-aos="fade-left">
            <img
                    alt="Card Image"
                    src="/img/phone.png"
                    width="200px"
                    height="200px"
                  />
            </div>

            <div
            className=" w-full border-b-2 border-gray-900 divide-x-4 pt-4"
            ></div>
          </div>

          <div id="Retirement-Income"className="mt-30 py-8 flex flex-wrap items-center">
          <div className="mx-auto mt-2 flex w-full justify-center py-4 px-4 lg:mt-0 md:relative md:left-6 md:w-1/2 xl:relative xl:left-14 bg-gray-100" 
          data-aos="fade-right">
            <img
                    alt="Card Image"
                    src="/img/laptop1.png"
                    height="200px"
                    width="120px"
                    className="h-1/2 w-full"
                  />
            </div>
            <div className="mx-auto -mt-8 w-full px-4 md:w-1/2 border-2 md:relative md:right-6 md:py-9  xl:relative xl:right-12 xl:py-20 border-gray-300  hover:bg-[#5b0e0e] hover:text-cyan-50 "
             data-aos="fade-in"
            >
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <h3
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray-300"
              >
                Retirement Income
              </h3>
              <span className="mb-8 font-normal">
              The gains from real estate make properties more valuable.
                <br />
                <br />
                You will have a concrete source of passive income. In some cases, you will end up
                earning more money than a lot of income-generating jobs.
              </span>

            </div>
            <div
            className=" w-full border-b-2 border-gray-900 divide-x-4 pt-4"
            ></div>
        
          </div>

        </div>
      </section>
      <section id="Ceo Talk" className="px-4 pt-8 pb-48">
        <div className="container mx-auto">
            <h2
                 variant="h2" 
                 color="Black" 
                 className="mx-auto py-2" 
                 align="center"
                >
                CEO TALK
             </h2>
          <div className="mt-8 w-4/5 grid grid-cols-1 gap-8 mx-auto md:grid-cols-1 xl:grid-cols-2 sm:md:grid-cols-1">
          {teamData.map(({ name, position, description }) => (
              <TeamCard
                key={name}
                name={name}
                position={position}
                description={description}
              />
            ))}
          </div>

          <div className="">

          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-8 px-4 content-center items-center justify-center text-center">
        <div className="container mx-auto">
          <div id="reviews" className="relative mx-auto py-4 content-center items-center justify-center text-center mb-14" >
          <h2
            variant="h2" 
            color="Black" 
            className="mx-auto py-4" 
            align="center"
            >
            REVIEWS
        </h2>
          <div className="mx-auto mt-20 mb-10 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-1 lg:grid-cols-3">
            {contactData.map(({ title, description }) => (
              null
              // <Card
              //   key={title}
              //   color="transparent"
              //   shadow={false}
              //   className="text-center text-blue-gray-900 bg-white px-2 py-4"
              // >
              //   {/* <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
              //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
              //   <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
              //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
              //   <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
              //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
              //   </div> */}
           
              //   <h5 variant="h5" color="blue-gray" className="mb-2">
              //     {title}
              //   </h5>
              //   <span className="font-normal text-blue-gray-500">
              //     {description}
              //   </span>
              // </Card>
            ))}
          </div>
          <div>
            {
              show ?   <div className="mx-auto mt-2 mb-5 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-1  lg:grid-cols-3" data-aos="fade-in">
              {contactData1.map(({ title, description }) => (
                // <Card
                //   key={title}
                //   color="transparent"
                //   shadow={false}
                //   className="text-center text-blue-gray-900  bg-white px-2 py-4"
                // >
                //   {/* <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                //   <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                //   <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                //   <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                //   </div> */}
             
                //   <h5 variant="h5" color="blue-gray" className="mb-2">
                //     {title}
                //   </h5>
                //   <span className="font-normal text-blue-gray-500">
                //     {description}
                //   </span>
                // </Card>
                null
              ))}
              </div>:null
            }
          </div>
          <button onClick={() => setShow(!show)} 
              className="text-center text-blue-gray-50  bg-black px-2 py-2 rounded-lg"
           > View All</button>
          </div>
          <div  id="coaching-tips">
          <h2
            variant="h2" 
            color="Black" 
            className="mx-auto py-4" 
            align="center"
            >
            Coaching Tips
        </h2>

          <div className="mx-auto mt-1 mb-20  grid w-full grid-cols-1 gap-16 md:grid-cols-1 md:w-full lg:1/2 xl:w-1/2 lg:grid-cols-1">
            {coaching.map(({description }) => (
              // <Card
              //   shadow={false}
              //   className="text-center text-blue-gray-900 bg-white px-2 py-4"
              // >
              //   <div className="grid grid-cols-1 gap-3 pb-4 mx-auto md:grid-cols-1 xl:grid-cols-1">
              //   {/* <div className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg ">
              //   <UsersIcon className="h-6 w-6 text-blue-gray-900" /> <UserGroupIcon className=" text-blue-gray-900  -mt-0.5 h-6 w-3.5"></UserGroupIcon>
              // </div> */}
                
              //   </div>
              //   <span className="font-normal text-blue-gray-500">
              //     {description}
              //   </span>
              // </Card>
              null
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto content-center items-center px-16 justify-center text-center mb-10 md:py-4 md:px-14 xl:py-4 xl:px-">
        <div>
        <h3
            variant="h3" 
            color="Black" 
            className="mx-auto py-2" 
            align="center"
            >
            Want to Join Exa RealState
        </h3>
        <h5
        variant="h5"
        className="mx-auto py-2" 
        > Complete this form and we will get back to you in 24 hours.</h5>

          <form className="mx-auto mt-12 max-w-3xl text-center md:px-8">
            <div className="mb-8 flex flex-wrap gap-6" >
              <Input variant="standard" size="lg" label="Full Name" color="light-green"  />
              <Input variant="standard" size="lg" label="Email Address " color="light-green"  />
            </div>
            {/* <Textarea variant="standard" size="lg" label="Message" rows={8} color="light-green" /> */}
            <Button size="lg" className="mt-8 bg-light-green-500">
              Send Message
            </Button>
          </form>
          </div>
        </section>
      <div className="bg-[#5b0e0e] text-blue-gray-50">
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
