import React, { useState } from "react";
import "lazysizes";
// import exterior_img1 from '../images/Tattava/Tattava/exterior/1.jpg'
// import exterior_img2 from '../images/Tattava/Tattava/exterior/2.jpg'
// import exterior_img3 from '../images/Tattava/Tattava/exterior/3.jpg'
// import exterior_img4 from '../images/Tattava/Tattava/exterior/4.jpg'
// import exterior_img5 from '../images/Tattava/Tattava/exterior/5.jpg'
// import exterior_img6 from '../images/Tattava/Tattava/exterior/6.jpg'
// import exterior_img7 from '../images/Tattava/Tattava/exterior/7.jpg'
// import exterior_img8 from '../images/Tattava/Tattava/exterior/8.jpg'
// import exterior_img9 from '../images/Tattava/Tattava/exterior/9.jpg'
// import exterior_img10 from '../images/Tattava/Tattava/exterior/10.jpg'
// import exterior_img11 from '../images/Tattava/Tattava/exterior/11.jpg'
// import exterior_img12 from '../images/Tattava/Tattava/exterior/12.jpg'
// import exterior_img13 from '../images/Tattava/Tattava/exterior/13.jpg'

const exterior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F1.jpg?alt=media&token=0ffc81f9-e28c-4b27-995d-d4993eb0fa68";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F2.jpg?alt=media&token=b86932ee-1a6b-4abf-84f6-01e025baebda";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F3.jpg?alt=media&token=664fa4f8-ee16-473e-b586-9e1306c1d8f6";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F4.jpg?alt=media&token=a566fad2-4a10-44be-8e3a-c72612a084dd";
const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F5.jpg?alt=media&token=70addaa5-b82b-4adb-ae25-6f7283d55599";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F6.jpg?alt=media&token=3877a8e2-0762-4886-a9fa-b56bb8d6faba";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F7.jpg?alt=media&token=6758f67e-d511-49e5-8951-98b01b38d988";
const exterior_img8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F8.jpg?alt=media&token=6dcd6919-76c1-4264-a04d-e4891612fde8";
const exterior_img9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F9.jpg?alt=media&token=f9c89b45-702f-4fb7-b1c4-18d94ba58813";
const exterior_img10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F10.jpg?alt=media&token=f6c7332f-76bc-4732-9b70-0d484d9f62df";
const exterior_img11 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F11.jpg?alt=media&token=27a6741c-8763-4631-835a-0a21b91cdd04";
const exterior_img12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F12.jpg?alt=media&token=e1805c18-53cc-48c4-98e8-9a665352e236";
const exterior_img13 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F13.jpg?alt=media&token=9385f494-39fc-4523-97ab-2eb47a86e082";

const TattvaExterior = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image sources
  const imageSources = [
    exterior_img1,
    exterior_img2,
    exterior_img3,
    exterior_img4,
    exterior_img5,
    exterior_img6,
    exterior_img7,
    exterior_img8,
    exterior_img9,
    exterior_img10,
    exterior_img11,
    exterior_img12,
    exterior_img13,
  ];

  // Function to handle image click
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Button container at the top */}
      <div className="left-0 w-full flex justify-center mt-10">
        <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-500 rounded hover:bg-white group py-1.5 px-2.5">
          <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Exterior
          </span>
        </button>
      </div>

      {/* Image grid container */}
      <div className="max-w-screen-xl mx-auto px-2 py-4 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative overflow-hidden">
          {/* Map over image sources and render images */}
          {imageSources.map((imageUrl, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                data-src={imageUrl} // Add 'data-src' instead of 'src'
                alt={`Image ${index + 1}`}
                className="lazyload w-full h-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
                onClick={() => handleImageClick(imageUrl)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75">
          <div className="absolute top-4 right-4">
            <button className="text-white" onClick={handleCloseModal}>
              Close
            </button>
          </div>
          <div className="flex items-center justify-center h-full">
            <img
              src={selectedImage}
              alt="Full Screen"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TattvaExterior;
