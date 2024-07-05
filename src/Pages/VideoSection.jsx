// src/components/VideoSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const VideoSection = ({
  videoId,
  videoURL,
  title,
  description,
  link,
  toggleFullScreen,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row mt-20">
      {/* Video Background */}
      <div className="w-full sm:w-1/2 h-96 sm:h-120 relative">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover"
            id={videoId}
            onClick={() => toggleFullScreen(videoId)}
          >
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Description */}
      <div className="w-full sm:w-1/2 bg-white bg-opacity-80 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
        <p className="text-black text-lg text-justify">{description}</p>
        <Link to={link}>
          <button className="mt-4 px-4 py-2 bg-white text-black border border-black hover:text-black hover:bg-gray-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
