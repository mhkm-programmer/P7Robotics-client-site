import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Discount from "./Discount";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
    
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 container mx-auto px-2">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover object-center  w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://i.ibb.co/941n8kJ/pxfuel.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
           Explore our new product
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Embark on exciting adventures and challenges with our robotic playmates. <br /> tFrom educational learning to interactive companions, we have it all.
            </p>
            <div className="flex items-center">
            
              <a
                href="/all-toys"
                aria-label=""
                className="btn-gradiant"                
              >
              Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-ou"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="6000"
        className="container mx-auto"
      >
        <Discount></Discount>
      </div>
    </div>
  );
};

export default Banner;
