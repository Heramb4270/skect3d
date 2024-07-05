//approach 1

// import React, { useState } from 'react';

// const ExteriorImageGrid = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Array of image sources
//   const imageSources = [
//     'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/4394220/pexels-photo-4394220.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/7283549/pexels-photo-7283549.jpeg?auto=compress&cs=tinysrgb&w=600',
//     'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=600',
//     "https://images.pexels.com/photos/7168606/pexels-photo-7168606.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/8134820/pexels-photo-8134820.jpeg?auto=compress&cs=tinysrgb&w=600",
//   ];

//   // Function to handle image click
//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       {/* Button container at the top */}
//       <div className="left-0 w-full flex justify-center mt-10">
//         <div className="bg-gray-500 text-white text-center py-2">
//           <button className="bg-gray-500 text-white px-2 py-1 rounded-lg">Exterior</button>
//         </div>
//       </div>

//       {/* Image grid container */}
//       <div className="max-w-screen-xl mx-auto px-4 py-8 mt-3">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* Map over image sources and render images */}
//           {imageSources.map((imageUrl, index) => (
//             <img
//               key={index}
//               src={imageUrl}
//               alt={`Image ${index + 1}`}
//               className="w-full rounded-lg shadow-lg cursor-pointer"
//               onClick={() => handleImageClick(imageUrl)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Modal for full-screen image */}
//       {selectedImage && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75">
//           <div className="absolute top-4 right-4">
//             <button className="text-white" onClick={handleCloseModal}>
//               Close
//             </button>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <img src={selectedImage} alt="Full Screen" className="max-w-full max-h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExteriorImageGrid;

// 2nd approach

import React, { useState } from "react";
import "lazysizes";
// import exterior_img1 from "../images/Pyramid_City_Cam1.jpg";
// import exterior_img2 from "../images/Pyramid_City_Cam3.jpg";
// import exterior_img3 from "../images/Pyramid_City_Cam4_02.jpg";
// import exterior_img4 from "../images/Pyramid_City_Cam4_03.jpg";
// import exterior_img5 from "../images/Pyramid_City_Cam9.jpg";
// import exterior_img6 from "../images/Pyramid_City_Cam10_02.jpg";
// import exterior_img7 from "../images/PYRAMID_CITY_NIGHT_RENDER_V01_Interactive LightMix copy.jpg";

const exterior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam1.jpg?alt=media&token=ef3abf3f-d9f2-4acf-bc3a-c453e05b8eb0";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam3.jpg?alt=media&token=ed4d0c1b-d5f7-4437-85bb-3abf9c00776c";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam4_02.jpg?alt=media&token=10b971e0-9ec8-4f7d-a192-8866316e2f32";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam4_03.jpg?alt=media&token=a46832ae-dc3d-4421-96f5-c4d9d864ea1a";
const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam9.jpg?alt=media&token=ce20eac6-36b3-4b76-a18a-cbdcd2be38c6";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid_City_Cam10_02.jpg?alt=media&token=68d3a8f0-2aee-441a-93f8-577d3a8e3254";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPYRAMID_CITY_NIGHT_RENDER_V01_Interactive%20LightMix%20copy.jpg?alt=media&token=42a1e61d-7cb5-44f9-936e-62f0ed50859f";

const ExteriorImageGrid = () => {
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

export default ExteriorImageGrid;
