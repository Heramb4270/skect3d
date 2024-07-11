import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import mainVideo from "../Videos/project_video.mp4";
const logo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FFinal%20Logo%201.png?alt=media&token=f89fd1d0-67f8-4871-b5c2-8f000c20ea22";

import "lazysizes";

const ProjectVideo = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [textIndex, setTextIndex] = useState(0);
  const textData = [
    { text: "Welcome", duration: 10000 },
    { text: "to", duration: 3000 },
    { text: "Photorealistic", duration: 5000 },
    { text: "and", duration: 5000 },
    { text: "Dynamic Visualizations", duration: 5000 },
    { text: "the World", duration: 5000 },
    { text: "of", duration: 5000 },
    { text: "Sketchers 3D", duration: 5000 },
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

  const handleLogoClick = () => {
    navigate("/"); // Navigate to Contact Us page
  };

  return (
    <div className="relative  h-screen overflow-hidden mb-10">
      <div className="absolute inset-0">
        <video
          className="lazyload w-full h-full object-cover"
          data-src="https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/videos%2Fvideoplayback.mp4?alt=media&token=8c345aa4-066f-4883-aeb8-00cdf10e4485"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <img
        src={logo}
        alt="Logo"
        onClick={handleLogoClick}
        className="fixed top-4 left-8 z-10 w-32 h-10 sm:w-44 sm:h-12 md:w-60 md:h-28 lg:w-60 lg:h-28 cursor-pointer"
      />
      <div
        id="text-overlay"
        className="absolute inset-0 flex items-center justify-center text-black z-10 opacity-0 transition-opacity duration-1000 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 text-center"
      ></div>
    </div>
  );
};

export default ProjectVideo;
