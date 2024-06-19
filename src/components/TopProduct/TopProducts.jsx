import React from "react";
import Img1 from "../../assets/shirt/pant-1.png";
import Img2 from "../../assets/shirt/pant-2.png";
import Img3 from "../../assets/shirt/pant-1.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Denim Wear",
    description:
      "hello every one this all mens wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed pant",
    description:
      "hello every one this all mens wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
  {
    id: 3,
    img: Img3,
    title: "kids wear",
    description:
      "hello every one this all mens wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-100 py-10 dark:bg-gray-700">
      <div className="container ">
        {/* Header section */}
        <div className="text-center mb-24 ">
          <p data-aos="fade-up" className="text-sm font-semibold text-primary">
            Top Rated Products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold mt-2 dark:text-white "
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 mt-2 dark:text-white font-semibold"
          >
            Here Our Best product are displayed..
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-6 md:gap-8 place-items-center">
          {ProductData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className=" w-full max-w-[200px] mt-[20px] mb-[20px] rounded-2xl bg-white
             dark:bg-gray-200 hover:bg-black/80
             dark:hover:bg-primary hover:text-white
              relative shadow-xl duration-300 group dark:text-black "
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto
                  transform -translate-y-20
                  group-hover:scale-105 duration-300
                  drop-shadow-md h-[180px]"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex justify-center gap-1 text-yellow-500 dark:group-hover:text-white">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:group-hover:text-black">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105
                duration-300 text-white py-1 px-4
                rounded-full mt-4 dark:group-hover:bg-white
                group-hover:text-black "
                  onClick={handleOrderPopup}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
