import React, {useState} from "react";
import {StarIcon} from "@heroicons/react/24/solid";

function FeaturesBlocks() {
  const [show, setShow] = useState(false)
  return (
    <section id='reviews'  className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative content-center max-w-6xl mx-auto px-4 sm:px-6">
        <div className="items-center justify-center py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className=" text-3xl mb-4">REVIEWS</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
          
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Malissa J.</h4>
              <p className="text-gray-600 text-center">I'm 57 years, i worked all my life but investing with Exa realestate over 6 years has made my life so much easier. I now work less and have more money saved up for my retirement. I spend so much time with my grand kids this makes me really happy.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
          
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">René Reiniger</h4>
              <p className="text-gray-600 text-center"> So far , it's been great . The ease of having options to invest just from your mobile device is absolutely great . The app itself has been without any glitches since I started using it . Responsive emails etc have all been smooth , realible & efficient . Everything has worked as expected so far & I hope it continues this way.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
          
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Georgia Ford</h4>
              <p className="text-gray-600 text-center">Everyone spends so much time being busy and working so hard. while there is merit to such work ethic we all grow and have to make smart decisions early. I have come to realise that family is very important. Due to the income i have been able to receive from Exa realestate  i now work less and spend more time with my family.</p>
            </div>

            {/* 4th item */}
            {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Lucas Marshall</h4>
              <p className="text-gray-600 text-center">Exa RealEstate have been Profitable to me.</p>
            </div>:null
               }


              {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ditte M. Nielsen</h4>
              <p className="text-gray-600 text-center">Jeg elsker denne app, fordi den er sikker legitim.</p>
            </div>:null
               }


                     {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Anne Huard</h4>
              <p className="text-gray-600 text-center">L'application fonctionne tres bien pour moi.</p>
            </div>:null
               }


         
         {/* 4th item */}
         {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Thorsten Kohler</h4>
              <p className="text-gray-600 text-center">Investing in Exa realestate is financially rewarding.</p>
            </div>:null
               }




            {/* 4th item */}
            {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
               <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Stefan Fruehauf</h4>
              <p className="text-gray-600 text-center">Die App ist cool.  In der Tat ist es sehr einfach zu investieren.</p>
            </div>:null
               }


            {/* 4th item */}
            {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
          <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ulysses H</h4>
              <p className="text-gray-600 text-center">Thanks to Exa realestate for accepting me. Its not just the profit but also the impact they have made in my life. I highly recommend them.</p>
            </div>:null
               }


               {/* 4th item */}
                  {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                     
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Julius T</h4>
              <p className="text-gray-600 text-center">I tested the app to see how smoothly I can withdraw, so far its been smooth. Keep up the good work Exa Realestate and team.</p>
            </div>:null
               }


              {/* 4th item */}
                {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
               <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Louie Baldwin</h4>
              <p className="text-gray-600 text-center">I'm glad i made out the time to understand how Exa realestate works, I'm proud to say I'm in US$ 720 profit in just 2 days of investing US$ 12,000.</p>
            </div>:null
               }


               {/* 4th item */}
                     {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Daniel Bentley</h4>
              <p className="text-gray-600 text-center">Wow good news, i took out time to learn how to deposit and withdraw, since then earning with Exa realestate have been super easy.</p>
            </div>:null
               }


              {/* 4th item */}
                       {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
           <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Katrine A</h4>
              <p className="text-gray-600 text-center">Fortsæt det gode arbejde ExaRealestate.  Jeg elsker appen, og supportteamet var hjælpsomme.</p>
            </div>:null
               }


             {/* 4th item */}
                      {
              show ?     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Quarantino Russo</h4>
              <p className="text-gray-600 text-center">I'm horned to be part of Exa realEstate.</p>
            </div>:null
               }

              {/* 4th item */}
                 {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Rufino Rizzo</h4>
              <p className="text-gray-600 text-center">Thanks for all the new update I'm really loving it.</p>
            </div>:null
               }

               {/* 4th item */}
                  {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Bailey A</h4>
              <p className="text-gray-600 text-center">A lot of new features, thanks Exa Realestate for the continuous development.</p>
            </div>:null
               }


               {/* 4th item */}
                          {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Noah</h4>
              <p className="text-gray-600 text-center">Thanks Exa realestate for new updates and making it user friendly..</p>
            </div>:null
               }

                {/* 4th item */}
                        {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1"> Kai Lew</h4>
              <p className="text-gray-600 text-center">If you're looking for a safe invest i highly recommend Exa Realestate.</p>
            </div>:null
               }


              {/* 4th item */}
                         {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                 <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Blake </h4>
              <p className="text-gray-600 text-center">Exa realEstate  has my trust 100%.</p>
            </div>:null
               }

               {/* 4th item */}
                        {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                 <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                       
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jonathan Stanley</h4>
              <p className="text-gray-600 text-center">Too busy? And want to Work less? I highly recommend Exa Realestate.</p>
            </div>:null
               }


               
               {/* 4th item */}
               {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                     
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Erik Wechsler</h4>
              <p className="text-gray-600 text-center">Money is easy to make, it's all about finding the right investment that is 100% trusted. I'm happy i listened to my friend who introduced me to Exa Realestate.</p>
            </div>:null
               }


               {/* 4th item */}
                               {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Georgia Ford</h4>
              <p className="text-gray-600 text-center">Just 3 years of investing with Exa realestate i have come to understand money. Thanks to their useful and life changing emails. Money comes and go, It's not making a lot of money but also managing and taking care it. A lot of money can go to zero if it's not well managed. Imagine having good management skill, enough money saved up and a profitable investment. You will realise life gets easy. We will work less and spend more time with ourselves, family or doing what we love.</p>
            </div>:null
               }


              
               {/* 4th item */}
               {
              show ? <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <div className="grid grid-cols-5 gap-3 pb-4 mx-auto md:grid-cols-5 xl:grid-cols-5">
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow"className="-mt-0.5  h-6 w-3.5"></StarIcon>
                <StarIcon color="yellow" className="-mt-0.5 h-6 w-3.5"></StarIcon>
                </div>
                      
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Georgia Ford</h4>
              <p className="text-gray-600 text-center">Just 3 years of investing with Exa realestate i have come to understand money. Thanks to their useful and life changing emails. Money comes and go, It's not making a lot of money but also managing and taking care it. A lot of money can go to zero if it's not well managed. Imagine having good management skill, enough money saved up and a profitable investment. You will realise life gets easy. We will work less and spend more time with ourselves, family or doing what we love.</p>
            </div>:null
               }

          </div>

          
        </div>
        <div className="content-center mx-auto">
          <button onClick={() => setShow(!show)} 
              className="  text-center justify-center items-center text-blue-gray-50  bg-green px-2 py-2 rounded-lg"
           > View All</button>
          </div>



          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2 col-end-4">
             <img src="/img/download.png" alt="" srcset="" />
            </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
