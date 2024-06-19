import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/logo.png";
import footer from "../../assets/footerbg.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const BannerImg = {
    backgroundImage: `url(${footer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  const FooterLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div style={BannerImg} className="text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 py-6">
          {/* company details  */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 ">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Navrang
            </h1>
            <p className="font-semibold py-2">
              This Site is the on of the top selling clothing product in this
              year and also it a most ratting side.
            </p>

            <p className="font-semibold">
              This Site is the on of the top selling clothing product in this
              year and also it a most ratting side.
            </p>
          </div>
          {/* Footer Links  */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 gap-5">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black font-semibold"
                      key={link.title}
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4">
                <h1
                  className="sm:text-3xl text-xl
                 font-bold sm:text-left text-justify mb-3"
                >
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <Link to={link.link} className="font-semibold">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Link  */}
            <div>
              <div className="flex items-center gap-3 mt-10">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p className="font-semibold">Ahmadabad, Gujarat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p className="font-semibold">+91 9327613010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
