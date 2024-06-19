import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(true);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
