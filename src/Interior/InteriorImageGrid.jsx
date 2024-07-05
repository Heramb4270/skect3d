// import React, { useState } from 'react';

// const InteriorImageGrid = ({ imageUrls }) => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Function to handle image click and open in full-screen view
//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   // Function to close the full-screen view
//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-8">
//       {/* button */}
//       <div className="left-0 w-full flex justify-center mt-1 mb-3">
//         <div className="bg-gray-500 text-white text-center py-2">
//           <button className="bg-gray-500 text-white px-2 py-1 rounded-lg">Interior</button>
//         </div>
//       </div>
//       {/* First row with one full-width image */}
//       <div className="mb-4">
//         <img
//           src="https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt="Image 1"
//           className="w-full rounded-lg shadow-lg mb-2"
//           onClick={() =>
//             handleImageClick(
//               'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=600'
//             )
//           }
//         />
//       </div>

//       {/* second row with two images */}
//       <div className="flex flex-wrap mb-4">
//         <div className="w-full sm:w-1/2">
//           <div className="aspect-w-1 aspect-h-1">
//             <img
//               src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Image 3"
//               className="object-top object-cover rounded-lg shadow-lg"
//               onClick={() =>
//                 handleImageClick(
//                   'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600'
//                 )
//               }
//             />
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2">
//           <div className="aspect-w-1 aspect-h-1">
//             <img
//               src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Image 4"
//               className="object-top object-cover rounded-lg shadow-lg"
//               onClick={() =>
//                 handleImageClick(
//                   'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600'
//                 )
//               }
//             />
//           </div>
//         </div>
//       </div>

//       {/* Third row with two images */}
//       <div className="flex flex-wrap mb-4">
//         <div className="w-full sm:w-1/2">
//           <div className="aspect-w-1 aspect-h-1">
//             <img
//               src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Image 3"
//               className="object-top object-cover rounded-lg shadow-lg"
//               onClick={() =>
//                 handleImageClick(
//                   'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'
//                 )
//               }
//             />
//           </div>
//         </div>
//         <div className="w-full sm:w-1/2">
//           <div className="aspect-w-1 aspect-h-1">
//             <img
//               src="https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Image 4"
//               className="object-top object-cover rounded-lg shadow-lg"
//               onClick={() =>
//                 handleImageClick(
//                   'https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&w=600'
//                 )
//               }
//             />
//           </div>
//         </div>
//       </div>

//       {/* Fourth row */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <img
//           src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt="Image 1"
//           className="md:col-start-2 md:col-span-2 row-start-2 md:row-span-2 self-end object-top object-cover rounded-lg shadow-lg"
//           onClick={() =>
//             handleImageClick(
//               'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600'
//             )
//           }
//         />
//         <img
//           src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt="Image 2"
//           className="md:row-start-1 self-end object-top object-cover rounded-lg shadow-lg"
//           onClick={() =>
//             handleImageClick(
//               'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600'
//             )
//           }
//         />
//         <img
//           src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt="Image 3"
//           className="md:row-start-3 self-end object-top object-cover rounded-lg shadow-lg"
//           onClick={() =>
//             handleImageClick(
//               'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600'
//             )
//           }
//         />
//       </div>

//       {/* Modal for full-screen image */}
//       {selectedImage && (
//         <div
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
//           onClick={handleCloseModal}
//         >
//           <div className="absolute top-2 right-2">
//             <button
//               className="text-white text-lg bg-gray-800 px-3 py-1 rounded-md focus:outline-none"
//               onClick={handleCloseModal}
//             >
//               Close
//             </button>
//           </div>
//           <img src={selectedImage} alt="Full Screen" className="max-w-full max-h-full" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InteriorImageGrid;

//2nd approach
import React, { useState } from "react";
import "lazysizes";
//  import interior_img1 from '../images/Tattava/Tattava/interior/1.jpg'
//  import interior_img2 from '../images/Tattava/Tattava/interior/2.jpg'
//  import interior_img3 from '../images/Tattava/Tattava/interior/3.jpg'
//  import interior_img4 from '../images/Tattava/Tattava/interior/4.jpg'
//  import interior_img5 from '../images/Tattava/Tattava/interior/5.jpg'
//  import interior_img6 from '../images/Tattava/Tattava/interior/6.jpg'
//  import interior_img7 from '../images/Tattava/Tattava/interior/7.jpg'
//  import interior_img8 from '../images/Tattava/Tattava/interior/8.jpg'
//  import interior_img9 from '../images/Tattava/Tattava/interior/9.jpg'
//  import interior_img10 from '../images/Tattava/Tattava/interior/10.jpg'
//  import interior_img11 from '../images/Tattava/Tattava/interior/11.jpg'
//  import interior_img12 from '../images/Tattava/Tattava/interior/12.jpg'

const interior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F1.jpg?alt=media&token=a905ce32-0a30-4057-bc3e-1b0fe5b26ff7";
const interior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F2.jpg?alt=media&token=856f5a9e-125b-4fc0-8f98-046ffc26fe97";
const interior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F3.jpg?alt=media&token=d412409e-43bf-4707-a7f6-de5584d1c5c3";
const interior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F4.jpg?alt=media&token=f062de09-fe89-41e8-ad03-8e928abbfa43";
const interior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F5.jpg?alt=media&token=5232dee2-3fb0-40ff-8077-471be2a0b00d";
const interior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F6.jpg?alt=media&token=134d7255-5f5e-4f16-948e-6b8d52acbd5c";
const interior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F7.jpg?alt=media&token=df20f9e8-e9e0-4ef1-b321-111ac7a6c71d";
const interior_img8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F8.jpg?alt=media&token=a49ca3a5-4c7f-48fc-9923-0dd1588fb3e0";
const interior_img9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F9.jpg?alt=media&token=59ad4d8d-9604-4d74-afe8-66dfcbdee650";
const interior_img10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F10.jpg?alt=media&token=95a7e51a-b3f9-4102-b1e1-3a09d829896c";
const interior_img11 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F11.jpg?alt=media&token=4d149df4-e4f3-4a6c-a800-f9137959d2c2";
const interior_img12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Finterior%2F12.jpg?alt=media&token=ca678f0f-d9b0-4ad1-983b-6af7b7e69f5b";

const InteriorImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define the array of image URLs
  const imageUrls = [
    interior_img1,
    interior_img2,
    interior_img3,
    interior_img4,
    interior_img5,
    interior_img6,
    interior_img7,
    interior_img8,
    interior_img9,
    interior_img10,
    interior_img11,
    interior_img12,
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

export default InteriorImageGrid;
