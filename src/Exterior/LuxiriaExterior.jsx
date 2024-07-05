import React, { useState } from "react";
import "lazysizes";
// import exterior_img1 from '../images/luxiria/Lux/1.jpg'
// import exterior_img2 from '../images/luxiria/Lux/2.jpg'
// import exterior_img3 from '../images/luxiria/Lux/3.jpg'
// import exterior_img4 from '../images/luxiria/Lux/4.jpg'
// import exterior_img5 from '../images/luxiria/Lux/5.jpg'
// import exterior_img6 from '../images/luxiria/Lux/6.jpg'
// import exterior_img7 from '../images/luxiria/Lux/7.jpg'
// import exterior_img8 from '../images/luxiria/Lux/8.jpg'

const exterior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_3_FF.jpg?alt=media&token=c593350f-9f6c-4c33-af01-aeb6c59c5734";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_4.jpg?alt=media&token=461576ec-2e1c-412d-857d-ee4537969a52";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_4_Night_LU.jpg?alt=media&token=15380738-33a8-480c-b505-2e076bbacae3";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_5_LU_FF.jpg?alt=media&token=49b11089-ea54-42ed-a5c9-283da45dc3ee";
const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_6_LU_FF.jpg?alt=media&token=80966c7d-f660-412a-bc8b-c5e8af0f16b4";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_7_LU.jpg?alt=media&token=9494b4d9-e336-4411-a0d0-237b1a0ee934";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FClub%20View_FF.jpg?alt=media&token=b8e1d515-2ed6-445d-8765-5f7cd7076efd";

const LuxiriaExterior = () => {
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

export default LuxiriaExterior;
