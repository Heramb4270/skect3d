import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FFinal%20Logo%201.png?alt=media&token=f89fd1d0-67f8-4871-b5c2-8f000c20ea22";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="container mx-auto flex flex-wrap">
        {/* First Column for Logo */}
        <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-72 h-40" />
        </div>

        {/* Second Column for Quick Links */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div>
              <ul className="space-y-2 list-none">
                <li>
                  <Link
                    to="/aboutus"
                    className="text-white hover:text-gray-300 hover:text-lg"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 hover:text-lg"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <Link
                    to="/contactus"
                    className="text-white hover:text-gray-300 hover:text-lg"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 list-none">
                <li>
                  <a
                    href="mailto:sketchers3dofficial@gmail.com"
                    className="text-white hover:text-gray-300 hover:text-lg"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Column for Contact Us */}
        <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>
              <i className="fas fa-phone-alt"></i> +91 9595376600 | +91
              9518913547
            </p>
            <p>
              <i className="far fa-envelope"></i>{" "}
              <a
                href="mailto:sketchers3dofficial@gmail.com"
                className="text-white hover:text-gray-300"
              >
                sketchers3dofficial@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto flex justify-center items-center mb-4">
        <ul className="flex space-x-4 list-none">
          {/* <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-lg"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li> */}
          {/* <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 hover:text-lg"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </li> */}
          <li>
            <a
              href="https://youtu.be/UIkK4j20x_Y"
              className="text-white hover:text-gray-300 hover:text-lg"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href=" https://www.linkedin.com/company/sketchers-3d/"
              className="text-white hover:text-gray-300 hover:text-lg"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Copy Right and Email */}
      <div className="container mx-auto text-center">
        <p className="text-white">
          © 2024 Sketchers 3D. All rights reserved.{" "}
          <a
            href="mailto:vulkanio@gmail.com"
            className="text-white hover:text-gray-300"
          >
            sketchers3dofficial@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
