import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../Style.css";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Contact", link: "/contact" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "About Us", link: "/about" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="sticky top-0 shadow-md bg-gray-300 dark:bg-gray-900 dark:text-white duration-200 z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-3">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              Navrang
            </Link>
          </div>
          {/* searchBar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary w-[48px] transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group hover:w-[101px]"
            >
              <span className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden group-hover:inline overflow-hidden">
                Order
              </span>
              <FaCartShopping className="text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              <span className="slider"></span>
            </label>
            {/* Drawer Button for Small and Medium Screens */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                className="flex items-center gap-2 py-2"
              >
                <IoMdMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div
        data-aos="zoom-in"
        className="hidden sm:flex sm:justify-center justify-end bg-white dark:bg-gray-800 py-3 font-semibold"
      >
        <ul className="w-max items-center gap-4">
          <div className="sm:flex hidden items-center">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  className="inline-block px-4 hover:text-primary duration-200"
                  to={data.link}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
      {/* Drawer for Small and Medium Screens */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""} bg-gray-200`}>
        <div className="drawer-header container px-7 py-2">
          <h2 className="text-black font-semibold">Menu</h2>
          <button onClick={closeDrawer} className="font-semibold text-black">
            &times;
          </button>
        </div>
        <div className="drawer-content">
          <ul>
            {Menu.map((item) => (
              <li key={item.id}>
                <Link
                  className="inline-block w-full rounded-md p-2 font-semibold text-black hover:bg-primary/40"
                  to={item.link}
                  onClick={closeDrawer}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <h1 className="w-full bg-primary/40 rounded-md inline-block text-center py-2 text-black font-semibold mt-2">
            Thanks to visit..
          </h1>
        </div>
      </div>
      <div
        className={`drawer-overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
      ></div>
    </div>
  );
};

export default Navbar;
