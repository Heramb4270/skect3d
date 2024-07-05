// src/components/ProjectInfoCard.jsx
import React, { useState, useEffect } from "react";
import VideoSection from "./VideoSection";

const ProjectInfoCard = ({ videoData }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to toggle full screen
  const toggleFullScreen = (videoId) => {
    const video = document.getElementById(videoId);
    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Function to handle keydown event
  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && isFullscreen) {
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreenchange event
  useEffect(() => {
    const exitFullscreenHandler = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", exitFullscreenHandler);
    document.addEventListener("webkitfullscreenchange", exitFullscreenHandler);
    document.addEventListener("msfullscreenchange", exitFullscreenHandler);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("fullscreenchange", exitFullscreenHandler);
      document.removeEventListener(
        "webkitfullscreenchange",
        exitFullscreenHandler
      );
      document.removeEventListener("msfullscreenchange", exitFullscreenHandler);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 mt-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-black">
        Experience the Magic
      </h1>

      {/* Small centered below the heading */}
      <div className="text-center mb-8">
        <p className="text-base text-black">
          For a video heading on your website, you might consider something.
        </p>
      </div>

      {/* Map through videoData to render VideoSection components */}
      {videoData.map((video, index) => (
        <VideoSection
          key={index}
          videoId={`video${index}`}
          videoURL={video.videoURL}
          title={video.title}
          description={video.description}
          link={video.link}
          toggleFullScreen={toggleFullScreen}
        />
      ))}
    </div>
  );
};

export default ProjectInfoCard;
