import React from "react";
import BannerImage from "../../assets/women/kids-1.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-700">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImage}
              alt=""
              className="max-w-[400px] h-[400px] w-full 
            mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Text Details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold dark:text-white"
            >
              Winter Kids Wear Sale upto 50% off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm font-medium tracking-wide leading-5 dark:text-white"
            >
              Must Visit Our Store and get wholesale and retail kids clothes
              with quality product and join us to grow your Business and enhance
              your business in the market.
            </p>
            <div className="flex flex-col gap-2">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="dark:text-white">Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="dark:text-white">Fast Delivery</p>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="dark:text-white">Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="dark:text-white">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
