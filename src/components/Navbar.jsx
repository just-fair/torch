import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const showDisplay = () => {
    const isVisible = !show;
    setShow(isVisible);

    isVisible ? setOpacity(0) : setOpacity(1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const active = "current";
  const { pathname } = useLocation();

  return (
    <>
      <nav>
        <ul className={`sidebar ${show ? "show" : ""}`} onClick={showDisplay}>
          <li>
            <a href="#javascript:;" id="back">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#e8eaed"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </i>
            </a>
          </li>

          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/" className={pathname === "/" ? active : ""}>
              HOME
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link
              to="donation"
              className={pathname === "/donation" ? active : ""}
            >
              GIVE
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="about" className={pathname === "/about" ? active : ""}>
              ABOUT US
            </Link>
          </li>
          {/* <li onClick={() => window.scrollTo(0, 0)}>
            <Link
              to="partners"
              className={pathname === "/partners" ? active : ""}
            >
              Partners
            </Link>
          </li> */}
        </ul>

        <ul className={isSticky ? "sticky" : ""}>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/">
              <div className="logo-container">
                <img src={logo} alt="Logo image" width="60" height="60" />
              </div>
              <span>TORCH</span>
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/" className={`hide ${pathname === "/" ? active : ""}`}>
              HOME
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link
              to="donation"
              id="last"
              className={`hide ${pathname === "/donation" ? active : ""}`}
            >
              GIVE
            </Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link
              to="about"
              className={`hide ${pathname === "/about" ? active : ""}`}
            >
              ABOUT US
            </Link>
          </li>
          {/* <li onClick={() => window.scrollTo(0, 0)}>
            <Link
              to="partners"
              className={`hide ${pathname === "/partners" ? active : ""}`}
            >
              Partners
            </Link>
          </li> */}

          <li onClick={showDisplay} style={{ opacity: opacity }} id="burger">
            <a href="#javascript:;">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
