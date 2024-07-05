import React, { useState } from "react";
import "lazysizes";
// import jasmineImage1 from '../images/Jasmine/2.jpg';
// import jasmineImage2 from '../images/Jasmine/12.jpg';
// import jasmineImage3 from '../images/Jasmine/15.jpg';
// import luxiriaImage1 from '../images/luxiria/Lux/1.jpg';
// import luxiriaImage2 from '../images/luxiria/Lux/3.jpg';
// import luxiriaImage3 from '../images/luxiria/Lux/4.jpg';
// import pyramidgloriaImage2 from '../images/Pyramid/Pyramid/26.jpg';
// import pyramidgloriaImage3 from '../images/Pyramid/Pyramid/27.jpg';
// import tattvaImage4 from '../images/Tattava/Tattava/exterior/10.jpg';
// import tattvaImage1 from '../images/Tattava/Tattava/exterior/5.jpg';
// import tattvaImage2 from '../images/Tattava/Tattava/exterior/8.jpg';
// import tattvaImage3 from '../images/Tattava/Tattava/exterior/11.jpg';

const jasmineImage1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F2.jpg?alt=media&token=a2e70b73-e996-4ec2-a443-728bed01653e";
const jasmineImage2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F12.jpg?alt=media&token=e296b4df-c751-43be-9427-0d26d6e2def3";
const jasmineImage3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F15.jpg?alt=media&token=615197a9-2c9d-4bc4-bb75-fe90f667f260";
const luxiriaImage2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2F7.jpg?alt=media&token=607b2064-6b97-4a3b-9ccb-e5f6e15f51cf";
const luxiriaImage1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2F3.jpg?alt=media&token=ac5a2356-e734-4030-9d41-44124690d385";
const luxiriaImage3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2F4.jpg?alt=media&token=e909018f-16d0-436f-a890-402be0ed3643";
const pyramidgloriaImage2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid%2F26.jpg?alt=media&token=051287cb-0bc2-4497-a125-336d08b74306";
const pyramidgloriaImage3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid%2F27.jpg?alt=media&token=846d172d-92bc-48c0-9bc5-f6d68c892ff8";
const tattvaImage4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F10.jpg?alt=media&token=f6c7332f-76bc-4732-9b70-0d484d9f62df";
const tattvaImage1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F5.jpg?alt=media&token=70addaa5-b82b-4adb-ae25-6f7283d55599";
const tattvaImage2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F8.jpg?alt=media&token=6dcd6919-76c1-4264-a04d-e4891612fde8";
const tattvaImage3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F11.jpg?alt=media&token=27a6741c-8763-4631-835a-0a21b91cdd04";

const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Function to open an image in fullscreen
  const openFullscreenImage = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  // Function to close the fullscreen image
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  // Array of image sources
  const images = [
    jasmineImage1,
    jasmineImage2,
    jasmineImage3,
    luxiriaImage1,
    luxiriaImage2,
    luxiriaImage3,
    tattvaImage4,
    pyramidgloriaImage2,
    pyramidgloriaImage3,
    tattvaImage1,
    tattvaImage2,
    tattvaImage3,
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 mt-20">
      {/* Columns */}
      {images.map((imageSrc, index) => (
        <div
          key={index}
          className="flex flex-col justify-end relative overflow-hidden"
        >
          {/* Image */}
          <img
            src={imageSrc}
            alt={`Image ${index + 1}`}
            className="cursor-pointer w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 lazyload"
            onClick={() => openFullscreenImage(imageSrc)}
          />
        </div>
      ))}

      {/* Fullscreen Image */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeFullscreenImage}
        >
          <div className="max-w-full max-h-full relative">
            <img
              src={fullscreenImage}
              alt="Fullscreen Image"
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              onClick={closeFullscreenImage}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
