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
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_3_1_cc.jpg?alt=media&token=784a5aec-7f04-4590-a14b-9f657e5496dc";

const interior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_3_2_cc.jpg?alt=media&token=d819cfeb-2229-48a4-9c28-d4ea653b254e";
const interior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FBedroom_3_3_cc.jpg?alt=media&token=0a8f51b4-149b-4c94-90f3-58b13bb1e0a6";
const interior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FKrish's%20Bedroom_View_03_cc.jpg?alt=media&token=5e4d2bc8-329a-4e86-a62d-00766e0319edz";
const interior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FDining_1_cc.jpg?alt=media&token=1311d6c5-a9eb-4261-b6f2-0f6dcc57d548";
const interior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Finteriors%2FDining_2_cc.jpg?alt=media&token=64ca91df-3983-49c1-a107-c7719d1b3d4e";

const PyramidInterior = () => {
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

export default PyramidInterior;
