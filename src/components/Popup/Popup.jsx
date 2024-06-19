import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [productCount, setProductCount] = useState(1);

  const incrementCount = () => {
    setProductCount(productCount + 1);
  };

  const decrementCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-800 rounded-md duration-200 w-[300px]">
              {/* header  */}
              <div className="flex items-center justify-between border-b-2 pb-3">
                <div>
                  <h1 className="text-black dark:text-white font-semibold">
                    Order Now
                  </h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer text-black dark:text-white"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* form section  */}
              <form className="flex flex-col gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Name :"
                  className="w-full border rounded-md border-gray-300 dark:border-gray-600 placeholder:text-black dark:placeholder:text-gray-400  text-black dark:text-white px-2 py-1 mb-4"
                />

                <input
                  type="email"
                  placeholder="Email :"
                  className="w-full border rounded-md border-gray-300 dark:border-gray-600 placeholder:text-black dark:placeholder:text-gray-400  text-black dark:text-white dark:placeholder:bg-white px-2 py-1 mb-4"
                />

                <input
                  type="text"
                  placeholder="Address :"
                  className="w-full border rounded-md border-gray-300 dark:border-gray-600 placeholder:text-black dark:placeholder:text-gray-400  text-black dark:text-white px-2 py-1 mb-4"
                />

                {/* Counter Section */}
                <div className="flex items-center justify-end mb-4 gap-2">
                  <button
                    type="button"
                    onClick={decrementCount}
                    className="bg-gray-300  text-black dark:text-black  px-3 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="text-black dark:text-white">
                    {productCount}
                  </span>
                  <button
                    type="button"
                    onClick={incrementCount}
                    className="bg-gray-300  text-black dark:text-black px-3 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>

                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
