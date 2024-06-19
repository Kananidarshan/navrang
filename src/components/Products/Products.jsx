import React from "react";
import Img1 from "../../assets/women/kids-1.jpg";
import Img2 from "../../assets/women/kids-2.jpg";
import Img3 from "../../assets/women/kids-3.jpg";
import Img4 from "../../assets/women/kids-2.jpg";

import { FaStar } from "react-icons/fa6";

const ProductData = [
  {
    id: 1,
    img: Img1,
    title: "Kids wear",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Kids wear ",
    rating: 4.5,
    color: "Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Printed pant",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed pant",
    rating: 4.4,
    color: "Sky",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img1,
    title: "Kids wear",
    rating: 4.4,
    color: "special Denim",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-700">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-primary-light"
          >
            Top Selling Product for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-500 dark:text-white font-semibold"
          >
            Must Visit Our Store and Watch our Collection and join Us.
          </p>
        </div>

        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[240px] w-[180px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold dark:text-gray-100">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-3">
                    <FaStar className="text-yellow-400" />
                    <span className="dark:text-gray-100">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div data-aos="fade-up" className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md dark:bg-primary-light dark:text-black">
              View All Clothes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
