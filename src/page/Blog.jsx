import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Blog/1.jpg";
import img2 from "../assets/Blog/5.jpg";
import img3 from "../assets/Blog/6.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <main className="container mx-auto py-8 dark:bg-gray-700 dark:text-white">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Blog Post 1 --> */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img1}
              alt="Blog post image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                Summer Fashion Trends for Kids
              </h3>
              <p className="text-gray-700 mb-4">
                Discover the latest summer fashion trends for kids and keep your
                little ones stylish and cool.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
          {/* <!-- Blog Post 2 --> */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img3}
              alt="Blog post image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                10 Must-Have Winter Accessories
              </h3>
              <p className="text-gray-700 mb-4">
                Keep your kids warm and fashionable this winter with these
                must-have accessories.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
          {/* <!-- Blog Post 3 --> */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={img2}
              alt="Blog post image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Back to School Outfits</h3>
              <p className="text-gray-700 mb-4">
                Find the perfect back-to-school outfits that combine style and
                comfort for your kids.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center mt-3">
          <h1 className="text-xl font-bold">Thanks To Visit Our Blog</h1>
          <button
            onClick={handleButtonClick}
            className="border border-black px-2 py-2 rounded text-xl font-bold w-fit dark:border-white"
          >
            Go Back
          </button>
        </div>
      </main>
    </>
  );
};

export default Blog;
