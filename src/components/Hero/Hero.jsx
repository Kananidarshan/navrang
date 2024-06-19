import React from "react";
import Image1 from "../../assets/Hero/sale.png";
import Image2 from "../../assets/Hero/img1.png";
import Image3 from "../../assets/Hero/img2.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% Off on all Kid's Wear",
    description:
      "hello every one this all mens wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% Off on all Kid's Wear",
    description:
      "hello every one this all kid's wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 70% Off on all Kid's Wear",
    description:
      "hello every one this all mens wear product are imported from usa and other forain country and all product are branded product like BeingHuman , LV , cristian dior and many more..",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-700 dark:text-white flex justify-center items-center duration-200">
      {/* Background Pattern */}
      <div className="absolute h-[700px] w-[700px] bg-primary/40 dark:bg-primary/30 -top-1/2 right-0 rounded-3xl rotate-45 -z-9 "></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...setting}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-1">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-6xl font-bold"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.title}
                  </h1>
                  <p
                    className="text-sm dark:text-gray-300"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    className="relative z-10"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[250px] h-[320px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
