import React, { useState } from "react";
import "lazysizes";
// import exterior_img1 from "../images/Jasmine/1.jpg";
// import exterior_img2 from "../images/Jasmine/2.jpg";
// import exterior_img3 from "../images/Jasmine/3.jpg";
// import exterior_img4 from "../images/Jasmine/4.jpg";
// import exterior_img5 from "../images/Jasmine/5.jpg";
// import exterior_img6 from "../images/Jasmine/6.jpg";
// import exterior_img7 from "../images/Jasmine/7.jpg";
// import exterior_img8 from "../images/Jasmine/8.jpg";
// import exterior_img9 from "../images/Jasmine/9.jpg";
// import exterior_img10 from "../images/Jasmine/10.jpg";
// import exterior_img11 from "../images/Jasmine/11.jpg";
// import exterior_img12 from "../images/Jasmine/12.jpg";
// import exterior_img13 from "../images/Jasmine/13.jpg";
// import exterior_img14 from "../images/Jasmine/14.jpg";
// import exterior_img15 from "../images/Jasmine/15.jpg";

const exterior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F1.jpg?alt=media&token=fff2e2d0-8cd7-4989-a5d0-32df1db4d8da";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F2.jpg?alt=media&token=a2e70b73-e996-4ec2-a443-728bed01653e";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F3.jpg?alt=media&token=3cd2c680-da9a-48c4-baa6-da0ad7c43283";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F4.jpg?alt=media&token=3a7cbfb9-e827-44f9-b39b-49dd6a108c50";
const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F5.jpg?alt=media&token=cd8f3405-db14-470c-bd62-446e0b1c2868";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F6.jpg?alt=media&token=38c672b6-3957-4f5c-8d18-c6aa73afb2fe";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F7.jpg?alt=media&token=91967a47-a018-4df7-aae3-4ff970ba0bd2";
const exterior_img8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F8.jpg?alt=media&token=d83cba7b-58f0-4294-a1aa-de563d28c7ac";
const exterior_img9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F9.jpg?alt=media&token=34b76342-fceb-4073-9b76-48333d1018a6";
const exterior_img10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F10.jpg?alt=media&token=88983739-b230-4025-9c3c-3e94b5121755";
// const exterior_img11 =
//   "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F11.jpg?alt=media&token=76148ee0-b076-4a8d-9ed0-da91b0ebbe8e";
const exterior_img12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F12.jpg?alt=media&token=e296b4df-c751-43be-9427-0d26d6e2def3";
const exterior_img13 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F13.jpg?alt=media&token=8d8bb133-5fc6-4baa-838d-01aa3a44643d";
// const exterior_img14 =
//   "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F14.jpg?alt=media&token=9f8295a6-3216-4d2e-86a5-e9a6e38f25f9";
// const exterior_img15 =
//   "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F15.jpg?alt=media&token=615197a9-2c9d-4bc4-bb75-fe90f667f260";

const JasmineExterior = () => {
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
   // exterior_img11,
    exterior_img12,
    exterior_img13,
   // exterior_img14,
    //exterior_img15,
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

export default JasmineExterior;
