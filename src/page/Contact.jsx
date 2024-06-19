import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.080786595434!2d72.65753583476564!3d23.04175330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a5fc4da107%3A0x64d7603964e1071d!2sThink%20Novus%20Technologies!5e0!3m2!1sen!2sin!4v1718687791371!5m2!1sen!2sin";

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8  dark:bg-gray-700 dark:text-white">
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
            <form action="#" method="POST" className="space-y-6">
              <div>
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
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
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.323v21.353C0 23.408.595 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.892-4.788 4.656-4.788 1.324 0 2.463.099 2.795.144v3.243l-1.918.001c-1.505 0-1.796.716-1.796 1.765v2.316h3.591l-.468 3.622h-3.123V24h6.116c.729 0 1.324-.592 1.324-1.324V1.323C24 .592 23.405 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.569c-.885.389-1.83.654-2.825.775 1.014-.608 1.794-1.569 2.163-2.723-.951.563-2.005.97-3.127 1.192-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.201-4.92 4.917 0 .386.045.761.128 1.124-4.087-.205-7.715-2.164-10.144-5.144-.422.723-.666 1.561-.666 2.456 0 1.69.861 3.178 2.169 4.049-.801-.026-1.555-.247-2.21-.616v.061c0 2.362 1.684 4.335 3.918 4.784-.41.111-.842.171-1.287.171-.314 0-.615-.03-.917-.085.631 1.953 2.445 3.377 4.604 3.414-1.685 1.32-3.808 2.107-6.102 2.107-.395 0-.788-.023-1.175-.068 2.179 1.394 4.768 2.209 7.548 2.209 9.056 0 14.004-7.496 14.004-13.986 0-.213 0-.425-.015-.637.961-.694 1.8-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.957.24 2.415.415.587.23 1.01.508 1.454.952.445.444.723.867.952 1.454.175.458.361 1.245.415 2.415.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.957-.415 2.415-.23.587-.508 1.01-.952 1.454-.444.445-.867.723-1.454.952-.458.175-1.245.361-2.415.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.957-.24-2.415-.415-.587-.23-1.01-.508-1.454-.952-.445-.444-.723-.867-.952-1.454-.175-.458-.361-1.245-.415-2.415-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.957.415-2.415.23-.587.508-1.01.952-1.454.444-.445.867-.723 1.454-.952.458-.175 1.245-.361 2.415-.415 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.071-1.281.059-2.17.27-2.941.572-.797.31-1.474.732-2.145 1.403-.671.671-1.093 1.348-1.403 2.145-.302.771-.513 1.66-.572 2.941-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.059 1.281.27 2.17.572 2.941.31.797.732 1.474 1.403 2.145.671.671 1.348 1.093 2.145 1.403.771.302 1.66.513 2.941.572 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.281-.059 2.17-.27 2.941-.572.797-.31 1.474-.732 2.145-1.403.671-.671 1.093-1.348 1.403-2.145.302-.771.513-1.66.572-2.941.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.059-1.281-.27-2.17-.572-2.941-.31-.797-.732-1.474-1.403-2.145-.671-.671-1.348-1.093-2.145-1.403-.771-.302-1.66-.513-2.941-.572-1.28-.059-1.688-.071-4.947-.071zM12 5.838c-3.406 0-6.162 2.757-6.162 6.162 0 3.406 2.757 6.162 6.162 6.162 3.406 0 6.162-2.757 6.162-6.162 0-3.406-2.757-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.44.644-1.44 1.44 0 .796.644 1.44 1.44 1.44.796 0 1.44-.644 1.44-1.44 0-.796-.644-1.44-1.44-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.452 20.452h-3.908v-5.568c0-1.327-.025-3.036-1.85-3.036-1.851 0-2.136 1.445-2.136 2.941v5.663h-3.908V9.49h3.75v1.498h.053c.523-1 1.798-2.054 3.7-2.054 3.956 0 4.684 2.603 4.684 5.987v6.531zM5.337 8.408c-1.259 0-2.281-1.022-2.281-2.281 0-1.259 1.022-2.281 2.281-2.281 1.26 0 2.281 1.022 2.281 2.281 0 1.26-1.022 2.281-2.281 2.281zm1.953 12.044H3.384V9.49h3.906v10.962zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.457C0 23.208.792 24 1.771 24h20.457c.98 0 1.772-.792 1.772-1.771V1.771C23.998.792 23.206 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center mt-12">
        <h1 className="font-bold">Thanks To Get in Touch..</h1>
        <button
          onClick={handleButtonClick}
          className="border border-black px-2 py-2 rounded text-xl font-bold w-fit my-6 dark:border-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Contact;
