import React from "react";
import { Link } from "react-router-dom";

const Container = (props) => {
  return (
    <div
      className={`container p-4 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

const Video = ({ videolink }) => {
  return (
    <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videolink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoSection = ({
  videoId,
  videoURL,
  title,
  description,
  link,
  toggleFullScreen,
}) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 my-12">
        {/* Video Background */}
        <div className="w-full lg:w-1/2">
          <Video videolink={videoURL} />
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2 bg-white bg-opacity-80 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
          <p className="text-black text-lg mb-4">{description}</p>
          <Link to={link}>
            <button className="mt-4 px-4 py-2 bg-white text-black border border-black hover:text-black hover:bg-gray-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default VideoSection;
