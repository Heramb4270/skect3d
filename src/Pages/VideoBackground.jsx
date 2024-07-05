// final code
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import mainVideo from "../Videos/PrescotFinal TVC_new.mp4";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FFinal%20Logo%201.png?alt=media&token=f89fd1d0-67f8-4871-b5c2-8f000c20ea22";
const logoScrolled =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FFinal%20_Logo.png?alt=media&token=061c5b83-8a4b-4b38-b9ae-72dc912ad080";
// Import the new logo
import "lazysizes";
const VideoBackground = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(logo);
  // const [videoURL, setVideoURL] = useState("");

  const textData = [
    { text: "Creating Realistic Illustrations for", duration: 7000 },
    { text: "Residential", duration: 5000 },
    { text: "Commercial &", duration: 5000 },
    { text: "Industrial Spaces", duration: 5000 },
  ];

  useEffect(() => {
    const cycleText = () => {
      const currentText = textData[textIndex];
      const textOverlay = document.getElementById("text-overlay");
      if (textOverlay) {
        textOverlay.innerText = currentText.text;
        textOverlay.style.opacity = "1";
      }
      setTimeout(() => {
        if (textOverlay) {
          textOverlay.style.opacity = "0";
        }
        setTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
      }, currentText.duration);
    };

    const timeout = setTimeout(() => {
      cycleText();
    }, 10000);

    return () => clearTimeout(timeout);
  }, [textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change logo after scrolling down 100px
        setCurrentLogo(logoScrolled);
      } else {
        setCurrentLogo(logo);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(index);
  };

  return (
    <div className="relative h-screen">
      <video
        className="lazyload absolute top-0 left-0 w-full h-full object-cover z-0"
        data-src={
          "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/videos%2FtattavaAnimation30sec.mp4?alt=media&token=46aefbc3-94d7-4daf-a8d2-04e8c69ce95b"
        }
        autoPlay
        loop
        muted
        preload="none"
      >
        Your browser does not support the video tag.
      </video>

      <img
        src={currentLogo}
        alt="Logo"
        onClick={navigateToPage}
        className="fixed top-4 left-8 z-10 w-32 h-10 sm:w-44 sm:h-12 md:w-60 md:h-28 lg:w-60 lg:h-28 cursor-pointer"
      />

      <div
        id="text-overlay"
        className="absolute inset-0 flex items-center justify-center text-white z-10 opacity-0 transition-opacity duration-1000 text-3xl sm:text-4xl md:text-6xl font-bold"
      ></div>
    </div>
  );
};

export default VideoBackground;
