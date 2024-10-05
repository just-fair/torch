import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <div className="copyright" style={{ background: "black" }}>
        &copy; 2024 Torch. All rights reserved
      </div>
    </>
  );
}

export default App;
