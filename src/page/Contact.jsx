import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Contact = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContact = (e) => {
    e.preventDefault();

    const newMsg = {
      name,
      message,
      email,
    };

    const existingMsg = JSON.parse(localStorage.getItem("contactData")) || [];

    const updatedMsg = [...existingMsg, newMsg];

    localStorage.setItem("contactData", JSON.stringify(updatedMsg));

    console.log(name, message, email);

    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.080786595434!2d72.65753583476564!3d23.04175330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a5fc4da107%3A0x64d7603964e1071d!2sThink%20Novus%20Technologies!5e0!3m2!1sen!2sin!4v1718687791371!5m2!1sen!2sin";

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-700 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-white">
          We'd love to hear from you! Reach out to us for any queries or
          feedback.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleContact}
            >
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white text-center font-bold mb-4">
                  Get in Touch
                </h3>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
              <p className="mt-2 text-sm text-gray-600 font-semibold">
                123 Kids Fashion St, Fancy City, FC 12345
              </p>
              <div className="mt-4">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookSquare className="w-8 h-8" />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitterSquare className="w-8 h-8" />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagramSquare className=" w-8 h-8" />
                </Link>
              </div>
            </div>

            <button
              onClick={handleButtonClick}
              className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
