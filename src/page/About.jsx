import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/women/kids-1.jpg";
import Message from "../components/Popup/Message";
const About = () => {
  const navigate = useNavigate();
  const [MsgPopup, setMsgPopup] = useState(false);

  const handleMsgPopup = () => {
    setMsgPopup(true);
  };

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <main className="container mx-auto p-6 md:p-12 dark:bg-gray-700 dark:text-white">
        <section className="bg-white shadow-md rounded-lg p-6 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-700">
              Welcome to Navrang Kids Wear
            </h2>
            <p className="text-gray-600 mt-4 font-semibold">
              Fun, colorful, and comfortable clothing for kids.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={img1}
              alt="Kids Clothing"
              className="rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 h-[350px] w-[400px]"
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 leading-relaxed font-semibold">
                At N-90, we believe that children's clothing should be as
                playful and unique as they are. Our collection is designed with
                both style and comfort in mind, ensuring that your little ones
                can play freely while looking adorable.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Founded in 2019, our brand is committed to creating
                high-quality, eco-friendly clothing that both kids and parents
                love. Each piece is crafted with love and care, using the
                softest materials to keep your children comfortable all day
                long.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Join us on our journey to bring more joy and color into the
                world of children's fashion. Thank you for choosing N-90!
              </p>
              <button
                onClick={handleMsgPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full max-w-fit"
              >
                Connect with us
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="bg-pink-200 rounded-lg p-6 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Comfort
                </h3>
                <p className="text-gray-600">
                  Our clothing is designed to be comfortable and practical for
                  everyday wear.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We use only the best materials to ensure our clothing lasts
                  through all of your child's adventures.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We're committed to eco-friendly practices, from the fabrics we
                  choose to our manufacturing processes.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Comfort
                </h3>
                <p className="text-gray-600">
                  Our clothing is designed to be comfortable and practical for
                  everyday wear.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Quality
                </h3>
                <p className="text-gray-600">
                  We use only the best materials to ensure our clothing lasts
                  through all of your child's adventures.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We're committed to eco-friendly practices, from the fabrics we
                  choose to our manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-3 items-center mt-3">
          <h1 className="text-xl font-bold">Thanks To Visit ..</h1>
          <button
            onClick={handleButtonClick}
            className="border border-black px-2 py-2 rounded text-xl font-bold w-fit dark:border-white"
          >
            Go Back
          </button>
        </div>
      </main>

      {MsgPopup && <Message MsgPopup={MsgPopup} setMsgPopup={setMsgPopup} />}
    </>
  );
};

export default About;
