import React from "react";

const Modal = ({ cardData, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 p-6 relative z-10">
        <h2 className="text-2xl font-bold mb-4">{cardData.title}</h2>
        <img
          src={cardData.img}
          alt={cardData.title}
          className="w-full h-48 object-cover mb-4"
        />
        <p className="mb-4">{cardData.description}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
