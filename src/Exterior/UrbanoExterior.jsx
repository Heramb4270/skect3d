import React, { useState } from "react";
import "lazysizes";
// import exterior_img1 from "../Projects/urabano/1.jpg";
// import exterior_img2 from "../Projects/urabano/2.jpg";
// import exterior_img3 from "../Projects/urabano/3.jpg";
// import exterior_img4 from "../Projects/urabano/Final viewURBANO/1.jpg";
// import exterior_img5 from "../Projects/urabano/Final viewURBANO/2.jpg";
// import exterior_img6 from "../Projects/urabano/Final viewURBANO/3.jpg";
// import exterior_img7 from "../Projects/urabano/Final viewURBANO/4.jpg";
// import exterior_img8 from "../Projects/urabano/Final viewURBANO/5.jpg";
// import exterior_img9 from "../Projects/urabano/Final viewURBANO/6.jpg";
// import exterior_img10 from "../Projects/urabano/Final viewURBANO/7.jpg";
// import exterior_img11 from "../Projects/urabano/Final viewURBANO/8.jpg";
// import exterior_img12 from "../Projects/urabano/Final viewURBANO/9.jpg";
// import exterior_img13 from "../Projects/urabano/Final viewURBANO/10.jpg";
// import exterior_img14 from "../Projects/urabano/Final viewURBANO/11.jpg";
// import exterior_img15 from "../Projects/urabano/Final viewURBANO/12.jpg";
// import exterior_img16 from "../Projects/urabano/Final viewURBANO/13.jpg";
// import exterior_img17 from "../Projects/urabano/Final viewURBANO/14.jpg";
// import exterior_img18 from "../Projects/urabano/Final viewURBANO/15.jpg";
// import exterior_img19 from "../Projects/urabano/Final viewURBANO/16.jpg";
// import exterior_img20 from "../Projects/urabano/Final viewURBANO/17.jpg";
// import exterior_img21 from "../Projects/urabano/Final viewURBANO/18.jpg";
// import exterior_img22 from "../Projects/urabano/Final viewURBANO/19.jpg";
// import exterior_img23 from "../Projects/urabano/Final viewURBANO/20.jpg";
// import exterior_img24 from "../Projects/urabano/Final viewURBANO/21.jpg";
// import exterior_img25 from "../Projects/urabano/Final viewURBANO/22.jpg";
// import exterior_img26 from "../Projects/urabano/Urbano Final/1.jpg";
// import exterior_img27 from "../Projects/urabano/Urbano Final/3.jpg";
// import exterior_img28 from "../Projects/urabano/Urbano Final/5.jpg";
// import exterior_img29 from "../Projects/urabano/Urbano Final/7.jpg";
// import exterior_img30 from "../Projects/urabano/Urbano Final/9.jpg";
// import exterior_img31 from "../Projects/urabano/Urbano Final/11.jpg";
// import exterior_img32 from "../Projects/urabano/Urbano Final/13.jpg";
// import exterior_img33 from "../Projects/urabano/Urbano Final/15.jpg";
// import exterior_img34 from "../Projects/urabano/Urbano Final/17.jpg";
// import exterior_img35 from "../Projects/urabano/Urbano Final/19.jpg";
// import exterior_img36 from "../Projects/urabano/Urbano Final/21.jpg";

const exterior_img1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2F1.jpg?alt=media&token=6092a58e-58c4-4acf-87bf-6769d80eac89";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2F2.jpg?alt=media&token=6e766387-c283-4e4a-b4b8-dad16fc5a16e";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2F3.jpg?alt=media&token=c7ff0202-1526-4725-94a3-eaccb3e7d6c3";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_5_LU_FF.jpg?alt=media&token=49b11089-ea54-42ed-a5c9-283da45dc3ee";

const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_6_LU_FF.jpg?alt=media&token=80966c7d-f660-412a-bc8b-c5e8af0f16b4";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FCam_7_LU.jpg?alt=media&token=9494b4d9-e336-4411-a0d0-237b1a0ee934";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2FClub%20View_FF.jpg?alt=media&token=b8e1d515-2ed6-445d-8765-5f7cd7076efd";

const exterior_img8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F5.jpg?alt=media&token=54bac526-a7eb-41ae-94fe-5e55142f99c4";
const exterior_img9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F6.jpg?alt=media&token=85e2d9a8-f0dd-4fc3-8eb5-2baedf9784b8";
const exterior_img10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F7.jpg?alt=media&token=16efcfca-5f18-4fa0-abdb-8f0ab8d0f473";
const exterior_img11 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F8.jpg?alt=media&token=97a8f579-b06b-4434-8af1-7ee29e1d5991";
const exterior_img12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F9.jpg?alt=media&token=cd8a8c90-cd59-460a-8e58-53728273c8b9";
const exterior_img13 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F10.jpg?alt=media&token=02a579f7-b49b-4f54-8388-859249e417ed";
const exterior_img14 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F11.jpg?alt=media&token=80c617f3-34b1-4184-99ae-8aec666218ed";
const exterior_img15 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F15.jpg?alt=media&token=ada09f18-f220-4d96-9bf5-abcde5aa60f5";
const exterior_img16 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F16.jpg?alt=media&token=0619a4e9-a720-45a3-8b49-657ed65c24a3";
const exterior_img17 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F17.jpg?alt=media&token=32dff783-d918-4262-987d-490eb2fc9e7d";
const exterior_img18 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F18.jpg?alt=media&token=32a9dda5-61b1-4b04-ac5e-19a5c05fc93c";
const exterior_img19 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F19.jpg?alt=media&token=465e400d-13b9-458f-a362-c2d00ae36996";
const exterior_img20 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F20.jpg?alt=media&token=48a4c63b-ad11-4c62-a1c1-619ea28e2831";
const exterior_img21 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F21.jpg?alt=media&token=ecb49073-3c01-4590-aecf-51517cf12ae5";
const exterior_img22 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F22.jpg?alt=media&token=c0baf128-52ea-4a9b-9808-edeb99ab0736";

const exterior_img26 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F1.jpg?alt=media&token=8a485b38-d475-4458-927b-5952c51081bb";
const exterior_img27 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F3.jpg?alt=media&token=94af3d25-ec05-4551-9cf9-490bf1eb491c";
const exterior_img28 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F5.jpg?alt=media&token=0d225ead-349f-4596-b566-9ec9c62c81e7";
const exterior_img29 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F7.jpg?alt=media&token=09b5deb8-dfb5-47c1-8762-e125c67e73b7";
const exterior_img30 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F9.jpg?alt=media&token=7c3d941e-4a77-4381-8b1b-83513ad808ce";
const exterior_img31 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F11.jpg?alt=media&token=916fa8b5-48cd-4a55-bbb3-3c9fc7555d06";
const exterior_img32 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F13.jpg?alt=media&token=a4c7ed9d-fdd3-4325-bad9-f757a1c2ee2b";
const exterior_img33 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F15.jpg?alt=media&token=48ecc312-65a6-4988-9b84-500508bef54a";
const exterior_img34 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F17.jpg?alt=media&token=bf653050-266e-432e-843a-f0c4ecb78bfb";
const exterior_img35 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F19.jpg?alt=media&token=3c6b25d9-84bb-4f69-8785-085e782ed3a4";
const exterior_img36 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FUrbanoFinal%2F21.jpg?alt=media&token=0b70cd5a-5196-4ee9-adf5-c901bd244d1a";

const UrbanoExterior = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image sources
  const imageSources = [
    exterior_img1,
    exterior_img2,
    exterior_img3,
    exterior_img8,
    exterior_img9,
    exterior_img10,
    exterior_img11,
    exterior_img12,
    exterior_img13,
    exterior_img14,
    exterior_img15,
    exterior_img16,
    exterior_img17,
    exterior_img18,
    exterior_img19,
    exterior_img20,
    exterior_img21,
    exterior_img22,
    exterior_img26,
    exterior_img27,
    exterior_img28,
    exterior_img29,
    exterior_img30,
    exterior_img31,
    exterior_img32,
    exterior_img33,
    exterior_img34,
    exterior_img35,
    exterior_img36,
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

export default UrbanoExterior;
