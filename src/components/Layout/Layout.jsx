import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{paddingTop: "80px",overflow: "hidden"}}>
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
