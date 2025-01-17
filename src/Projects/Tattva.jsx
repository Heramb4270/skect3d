import React, { useState } from "react";
const interiorlogo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finterior-design.png?alt=media&token=9d9bf9fd-04d4-4427-b7a8-c2fec0e1c43e";
const exteriorlogo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fcitytech-logo.png?alt=media&token=267c57ea-9e56-4509-a637-a4241f70c314";
const vr =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fvirtual-reality.png?alt=media&token=c5a68c4a-2b07-47a8-8589-ce112f101eb9";
const walkthrough =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FMaps.png?alt=media&token=bbfe3d83-cf08-43a4-ae8a-58e4756ffbf3";

const Tattva = ({ heading, architect, projectBy, backgroundImage }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const openFullScreen = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  const navigateToPage = (page) => {
    window.location.href = `${page}`;
  };
  const openYouTubeVideo = () => {
    const youtubeUrl =
      "https://www.youtube.com/watch?v=F0Lbv9DofNA&feature=youtu.be";
    window.open(youtubeUrl);
  };
  const closeVideoPopup = () => {
    setShowVideoPopup(false);
  };
  const openVideoPopup = () => {
    setShowVideoPopup(true);
  };
  const VideoPopup = ({ videoId, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="relative w-[90vw] h-[80vh] max-w-[1200px] max-h-[800px]">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300"
          >
            &times;
          </button>
          <div className="w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-black">
      <div
        className="w-full h-screen bg-cover bg-center relative mb-8"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <div className="h-2/5 bg-white bg-opacity-50 flex flex-col items-center justify-end p-4 w-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2 text-black text-shadow-md max-[450px]:text-3xl">
                {heading}
              </h1>
              <p className="font-bold text-lg mb-0.5 text-black text-shadow-sm">
                Architect & Landscape: {architect}
              </p>
              <p className="font-bold text-lg mb-0.5 text-black text-shadow-sm">
                Project by: {projectBy}
              </p>

              {/* Buttons for Interior, Exterior, and VR */}
              <div className="flex justify-center space-x-4 mt-4">
                {/* Interior button */}
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={interiorlogo}
                    alt="interior"
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={() => navigateToPage("interior")}
                  />
                  <p className="text-black">Interior</p>
                </div>

                {/* Exterior button */}
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={exteriorlogo}
                    alt="exterior"
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={() => navigateToPage("/tattvaexterior")}
                  />
                  <p className="text-black">Exterior</p>
                </div>

                {/* VR button */}
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={vr}
                    alt="vr"
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={() => navigateToPage("vr")}
                  />
                  <p className="text-black">360 vr</p>
                </div>
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={walkthrough}
                    alt="WalkThrough"
                    disabled={true}
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={openVideoPopup}
                  />
                  <p className="text-black">WalkThrough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideoPopup && (
        <VideoPopup videoId="nbRrtekVaEw" onClose={closeVideoPopup} />
      )}
    </div>
  );
};

export default Tattva;
