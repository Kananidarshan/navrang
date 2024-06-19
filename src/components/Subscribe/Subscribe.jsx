import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import logo from "../../assets/logo.png";

const BannerImage = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImage}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="flex justify-between">
          <div className="space-y-6 max-w-xl max-auto">
            <div data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
                Get Notified About New Products
              </h1>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                data-aos="fade-up"
                placeholder="Enter your email"
                className="w-full p-3 border text-black
             rounded-md hover:bg-yellow-300"
              />
              <button
                data-aos="fade-up"
                className="bg-white text-black border rounded-md px-2 hover:bg-yellow-300 "
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden md:block ">
            <img src={logo} alt="N90 logo" className="h-[168px] w-[168px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
