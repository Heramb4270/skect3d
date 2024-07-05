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
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FBAGALOW%2002_final.jpg?alt=media&token=fe0a370b-31b0-4af2-bfb1-73edb41fdcc7";
const exterior_img2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FBANNER_%20final.jpg?alt=media&token=ab27c2f5-57f6-498c-8162-4faa116b40b9";
const exterior_img3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FBAR_final.jpg?alt=media&token=fa596f37-1847-4d81-bf57-c1e31501db76";
const exterior_img4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FCOMPOND%20WALL_final.jpg?alt=media&token=8f1d5358-31d3-4d5d-b1ae-380a983de72d";
const exterior_img5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FDEERT%20CAM%20_final.jpg?alt=media&token=e026e14c-1a2f-454d-b2e0-aac7807948f0";
const exterior_img6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FELDERLY%20PARK_%20FINAL.jpg?alt=media&token=a718fa3d-ed8c-4b2b-a30a-12ab827a70c5";
const exterior_img7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FEternity%20Tower.jpg?alt=media&token=04c65699-5d0a-4897-a9c1-205f0449f3ba";
const exterior_img8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FEternity%20Tower_Night.jpg?alt=media&token=7a6ac0a8-11c0-485f-839d-de3cac0d9844";
const exterior_img9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FGATE%20NIGHT%20CAM%2002_final.jpg?alt=media&token=58d348fd-4b96-4dad-8323-86aacbfe5640";
const exterior_img10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FPERFORMANCE%20DECK%20final.jpg?alt=media&token=2a8c701c-2623-4fc5-a665-363645de410b";
const exterior_img11 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FPODIUM%20CAM%2001%20final.jpg?alt=media&token=ca82e243-12e2-4978-88e8-17387c761f39";
const exterior_img12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FROUND%20ABOUT%20final%20v02.jpg?alt=media&token=9e3f050c-0a74-4a61-86b1-a56ad744167a";
const exterior_img13 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FTEMPLE_final.jpg?alt=media&token=39cbd5c1-3281-464f-ae7e-7fb09910092f";
const exterior_img14 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FTRIANGLE%20_final.jpg?alt=media&token=6e303101-d473-4220-9808-2625700776c1";
const exterior_img15 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2FYOGA%20DECK_final.jpg?alt=media&token=20889b33-58c5-48e1-a8db-1fb0a09c0ccb";
const exterior_img16 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fbangalow%20cam%2001_final.jpg?alt=media&token=9715324c-a58e-4cdf-b912-945c98515f27";
const exterior_img17 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fforest%20road%20cam%20_final.jpg?alt=media&token=44cc7f23-5380-4510-846e-206b4235766b";
const exterior_img18 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fkids%20play%20area%20cam%2001_final.jpg?alt=media&token=1d53d7be-6508-422a-a666-9b05cf3e21be";
const exterior_img19 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fkids%20play%20area%20cam%2002_%20final.jpg?alt=media&token=aaf491ac-847f-4bf6-9762-f3a44e2b430a";
const exterior_img20 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Forganic%20gardern%20final.jpg?alt=media&token=2b21e007-bd07-43d7-ba73-cd59c076f2ac";
const exterior_img21 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fpodium%20cam%2002_final.jpg?alt=media&token=52735d74-bb26-4d19-ad52-d7380e5432e0";
const exterior_img22 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Froad%20cam%2002%20FINAL.jpg?alt=media&token=879efd77-45de-4fc4-88f6-4d02c2cd91ac";
const exterior_img23 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmiraclez%2Fthree%20tower_Interactive%20LightMix.jpg?alt=media&token=ca0c350d-6931-4c44-90eb-9538e3b0cb06";

const MiracleZ = () => {
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
    exterior_img14,
    exterior_img15,
    exterior_img16,
    exterior_img17,
    exterior_img18,
    exterior_img19,
    exterior_img20,
    exterior_img21,
    exterior_img22,
    exterior_img23,
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

export default MiracleZ;
