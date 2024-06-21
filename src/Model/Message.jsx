import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Message = ({ MsgPopup, setMsgPopup }) => {
  const [name, setName] = useState("");
  const [massage, setMassage] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMsg = {
      name,
      massage,
      mobile,
    };

    const existingMsg = JSON.parse(localStorage.getItem("msgData")) || [];

    const updatedMsg = [...existingMsg, newMsg];

    localStorage.setItem("msgData", JSON.stringify(updatedMsg));

    console.log(name, massage, mobile);
    setMsgPopup(false);
  };

  return (
    <>
      {MsgPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header  */}
              <div className="flex items-center justify-between border-b-2 pb-3">
                <div>
                  <h1 className="font-bold dark:text-white">Connect with Us</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer dark:text-white"
                    onClick={() => setMsgPopup(false)}
                  />
                </div>
              </div>
              {/* form section  */}
              <form
                className="flex flex-col gap-2 mt-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Name :"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-md border-gray-300 placeholder:text-black  px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Message :"
                  onChange={(e) => setMassage(e.target.value)}
                  className="w-full border rounded-md border-gray-300 placeholder:text-black  px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Mobile :"
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full border rounded-md border-gray-300 placeholder:text-black  px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary font-semibold hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    Submit
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

export default Message;
