import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Testimonials/men-1.jpg";
import Image2 from "../../assets/Testimonials/men-2.jpg";
import Image3 from "../../assets/Testimonials/men-3.jpeg";

const TestimonialData = [
  {
    id: 1,
    name: "DARSHAN",
    Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
    img: Image1,
  },
  {
    id: 2,
    name: "SMIT",
    Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
    img: Image2,
  },
  {
    id: 3,
    name: "AYUSH",
    Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
    img: Image3,
  },
  {
    id: 4,
    name: "PARTH",
    Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
    img: Image1,
  },
  {
    id: 5,
    name: "SHYAM",
    Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
    img: Image2,
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolora
            sit vitae saepe! Molestias, qui!
          </p>
        </div>

        {/* Testimonial card*/}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xl text-gray-500">{data.Text}</p>
                      <h1
                        className="text-xl font-bold
                    text-black/80 dark:text-white"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/20 text-9xl font-bold
                  font-serif absolute top-8 right-8 dark:text-white"
                  >
                    ”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
