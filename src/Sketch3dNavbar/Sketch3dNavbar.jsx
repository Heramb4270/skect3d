import React, { useState } from "react";
import { Link } from "react-router-dom";
// import navpic from '../images/navbaricon.png';
const navpic =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fnavbaricon.png?alt=media&token=e488e35d-8b1e-43fe-b37f-e6955167ba46";
import "./Sketch3d.css";

const Sketch3dNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndNavigate = (path) => {
    setIsOpen(false);
    window.location.href = path; // Navigate to the specified path
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    {
      name: "360 VR",
      path: "https://sketchers3d.com/3dview/PYRAMIDCITY/index.htm",
      external: true,
    },
    { name: "About us", path: "/aboutus" },
    { name: "Contact us", path: "/contactus" },
  ];

  return (
    <div style={{ zIndex: 1000 }}>
      {/* Hamburger Menu icon */}
      <div
        className="fixed top-6 right-10 text-4xl cursor-pointer z-50"
        onClick={toggleMenu}
        style={{ zIndex: 1001 }}
      >
        <img
          src={navpic}
          alt="navpic"
          className="h-12 w-12 hover:rotate-180 transition-transform duration-300 sm:hover:rotate-180 sm:transition-transform sm:duration-300"
        ></img>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-start items-center text-white text-5xl tracking-1px overflow-hidden duration-500 transform ${
          isOpen ? "" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <ul className="space-y-10 text-left pl-10">
          {links.map((link, index) => (
            <li key={index} className="duration-500 hover:translate-y-[-5px]">
              {link.external ? (
                <a
                  href={link.path}
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  className="nav-link"
                  to={link.path}
                  onClick={() => closeMenuAndNavigate(link.path)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
        {/* Close button */}
        <div
          className="absolute top-10 right-10 text-4xl cursor-pointer z-50"
          onClick={toggleMenu}
          style={{ zIndex: 1001 }}
        >
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </div>
      </div>
    </div>
  );
};

export default Sketch3dNavbar;
