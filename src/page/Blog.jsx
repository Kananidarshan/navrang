import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/Blog/1.jpg";
import img2 from "../assets/Blog/5.jpg";
import img3 from "../assets/Blog/6.jpg";
import Modal from "../Model/BlogCard"; // Import the Modal component

const Blog = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleReadMore = (cardData) => {
    setSelectedCard(cardData);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showModal]);

  const PosterData = [
    {
      id: 1,
      img: img1,
      title: "Summer Fashion Trends for Kids",
      description:
        "Discover the latest summer fashion trends for kids and keep your little ones stylish and cool.",
    },

    {
      id: 2,
      img: img2,
      title: "10 Must-Have Winter Accessories",
      description:
        "Keep your kids warm and fashionable this winter with these must-have accessories.",
    },

    {
      id: 3,
      img: img3,
      title: "Back to School Outfits",
      description:
        "Find the perfect back-to-school outfits that combine style and comfort for your kids.",
    },
  ];

  return (
    <>
      <main className="container mx-auto py-8 dark:bg-gray-700 dark:text-white">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PosterData.map((data) => (
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={data.id}
            >
              <img
                src={data.img}
                alt="Blog post image"
                className="w-full h-48 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 dark:text-black">
                  {data.title}
                </h3>
                <p className="text-gray-700 mb-4 dark:text-black">
                  {data.description}
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadMore(data);
                  }}
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
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
      {showModal && (
        <Modal cardData={selectedCard} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Blog;
