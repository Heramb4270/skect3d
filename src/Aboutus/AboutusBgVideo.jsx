import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import logo from "../images/Final Logo 1.png";
import "lazysizes";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js"; // Adjust the path according to your setup
const logo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FFinal%20Logo%201.png?alt=media&token=f89fd1d0-67f8-4871-b5c2-8f000c20ea22";

const AboutusBgVideo = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [videoURL, setVideoURL] = useState("");

  const textData = [
    { text: "Sketchers 3D specializing in", duration: 4000 },
    { text: "crafting photorealistic", duration: 4000 },
    { text: "and", duration: 4000 },
    { text: "dynamic visualizations", duration: 4000 },
    { text: "of", duration: 4000 },
    { text: "unbuilt structures", duration: 4000 },
  ];

  useEffect(() => {
    const fetchVideoURL = async () => {
      try {
        const gsReference = ref(
          storage,
          "gs://deo-project-201f2.appspot.com/videos/about_us.mp4"
        );
        const url = await getDownloadURL(gsReference);
        setVideoURL(url);
      } catch (error) {
        console.error("Error getting download URL:", error);
      }
    };

    fetchVideoURL();
  }, []);

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
    }, 3000);

    return () => clearTimeout(timeout);
  }, [textIndex, textData]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="relative h-screen">
      {videoURL && (
        <video
          className="lazyload absolute top-0 left-0 w-full h-full object-cover z-0"
          data-src={videoURL}
          autoPlay
          loop
          muted
          preload="none"
        >
          Your browser does not support the video tag.
        </video>
      )}
      <img
        src={logo}
        alt="Logo"
        onClick={handleLogoClick}
        className="fixed top-4 left-4 z-20 w-44 h-12 md:w-60 md:h-28 lg:w-60 lg:h-28 cursor-pointer"
      />
      <div
        id="text-overlay"
        className="absolute inset-0 flex items-center justify-center text-black z-10 opacity-0 transition-opacity duration-1000 text-6xl font-bold"
      ></div>
    </div>
  );
};

export default AboutusBgVideo;
