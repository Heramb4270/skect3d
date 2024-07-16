import React, { useState } from "react";
import "lazysizes";
// import interior_img1 from '../images/Tattava/Tattava/interior/1.jpg'
// import interior_img2 from '../images/Tattava/Tattava/interior/2.jpg'
// import interior_img3 from '../images/Tattava/Tattava/interior/3.jpg'
// import interior_img4 from '../images/Tattava/Tattava/interior/4.jpg'
// import interior_img5 from '../images/Tattava/Tattava/interior/5.jpg'
// import interior_img6 from '../images/Tattava/Tattava/interior/6.jpg'
// import interior_img7 from '../images/Tattava/Tattava/interior/7.jpg'
// import interior_img8 from '../images/Tattava/Tattava/interior/8.jpg'
// import interior_img9 from '../images/Tattava/Tattava/interior/9.jpg'
// import interior_img10 from '../images/Tattava/Tattava/interior/10.jpg'
// import interior_img11 from '../images/Tattava/Tattava/interior/11.jpg'
// import interior_img12 from '../images/Tattava/Tattava/interior/12.jpg'
const interior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_1_Att_Toilet_1_cc%20(1).jpg?alt=media&token=e433ef86-071b-4e76-af3c-cefea31d67ff";

const interior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_1_Att_Toilet_2_cc.jpg?alt=media&token=0bb735ab-ccdf-4c7d-bb4e-6606b016f215";
const interior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_2_02_cc.jpg?alt=media&token=6992beb0-487c-4206-9b66-48591f8d6269";
const interior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_2_Att.%20Toilet_1_cc.jpg?alt=media&token=110f3c1e-82b7-4841-b053-88dd836ad0b2";
const interior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_2_Att.%20Toilet_2_cc.jpg?alt=media&token=ea88a7bc-235c-4caf-9637-8a2ce47aad08";
const interior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FC.Toilet_View_01_cc.jpg?alt=media&token=6e9f759f-7d12-47e7-bf4a-21669e4834fe";

const JasmineInterior = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define the array of image URLs
  const imageUrls = [
    interior_img1,
    interior_img2,
    interior_img3,
    interior_img4,
    interior_img5,
    interior_img6,
  ];

  // Function to handle image click and open in full-screen view
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Function to close the full-screen view
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* button */}
      <div className="left-0 w-full flex justify-center mt-1 mb-3">
        <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-500 rounded hover:bg-white group py-1.5 px-2.5">
          <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Interior
          </span>
        </button>
      </div>
      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative overflow-hidden">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            data-src={imageUrl} // Add 'data-src' instead of 'src'
            alt={`Image ${index + 1}`}
            className="lazyload w-full rounded-lg shadow-lg object-cover cursor-pointer transition-transform duration-300 transform hover:scale-110"
            onClick={() => handleImageClick(imageUrl)}
          />
        ))}
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <div className="absolute top-2 right-2">
            <button
              className="text-white text-lg bg-gray-800 px-3 py-1 rounded-md focus:outline-none"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <img
            src={selectedImage}
            alt="Full Screen"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};

export default JasmineInterior;
