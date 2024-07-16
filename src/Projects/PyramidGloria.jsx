import React, { useState } from "react";
const interiorlogo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finterior-design.png?alt=media&token=9d9bf9fd-04d4-4427-b7a8-c2fec0e1c43e";
const exteriorlogo =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fcitytech-logo.png?alt=media&token=267c57ea-9e56-4509-a637-a4241f70c314";
const vr =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fvirtual-reality.png?alt=media&token=c5a68c4a-2b07-47a8-8589-ce112f101eb9";
const walkthrough =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FMaps.png?alt=media&token=bbfe3d83-cf08-43a4-ae8a-58e4756ffbf3";

const PyramidGloria = ({ heading, architect, projectBy, backgroundImage }) => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (imageUrl) => {
    setFullScreenImage(imageUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  const navigateToPage = (page) => {
    window.location.href = `${page}`;
  };

  const navigateToExternalPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-black">
      <div
        className="w-full h-screen bg-cover bg-center relative mb-8"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <div className="h-1/3 bg-white bg-opacity-50 flex flex-col items-center justify-end p-4 w-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2 text-black text-shadow-md   max-[450px]:text-3xl">
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
                    disabled={true}
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    // onClick={() => navigateToPage("interior")}
                  />
                  <p className="text-black">Interior</p>
                </div>

                {/* Exterior button */}
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={exteriorlogo}
                    alt="exterior"
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={() => navigateToPage("/exterior")}
                  />
                  <p className="text-black">Exterior</p>
                </div>

                {/* VR button */}
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={vr}
                    alt="vr"
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    onClick={() =>
                      navigateToExternalPage(
                        "https://sketchers3d.com/3dview/PYRAMIDCITY/index.htm"
                      )
                    }
                  />
                  <p className="text-black">360 vr</p>
                </div>
                <div className="relative inline-block font-medium group py-1.5 px-2.5">
                  <img
                    src={walkthrough}
                    alt="WalkThrough"
                    disabled={true}
                    className="h-16 w-16 mr-4 transition-transform transform hover:scale-110"
                    // onClick={() => openYouTubeVideo()}
                  />
                  <p className="text-black">WalkThrough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyramidGloria;
