import React, { useEffect, useState } from "react";
// import client1 from '../images/client1.jpg';
// import client2 from "../images/client2.jpg";
// import client3 from "../images/client3.jpg";
// import client4 from "../images/client4.jpg";
// import client5 from "../images/client5.jpeg";
// import client6 from "../images/client6.jpeg";
// import client7 from "../images/client7.png";
// import client8 from "../images/client8.jpeg";
// import client9 from "../images/client9.png";
// import client10 from "../images/client10.jpeg";
// import client11 from "../images/client11.png";
// import client12 from "../images/client12.jpeg";
// import client13 from "../images/client13.jpeg";
// import client14 from "../images/client14.png";
// import client15 from "../images/client15.jpg";
// import client16 from "../images/client16.jpg";
// import client17 from "../images/client17.png";
// import client18 from "../images/client18.png";
// import client19 from "../images/client19.jpeg";
// import client20 from "../images/client20.jpeg";
// import client21 from "../images/client21.jpeg";
// import client22 from "../images/client22.jpeg";

const client1 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient1.jpg?alt=media&token=d011a823-6de9-4c2b-a1e6-b32c5e085500";
const client2 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient2.jpg?alt=media&token=09b83d72-e58b-4da8-80f2-fae1aebc568b";
const client3 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient3.jpg?alt=media&token=e4cd15cd-ef19-4dce-958f-2f36832cb19c";

const client4 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient4.jpg?alt=media&token=20c1a668-a476-4f92-83ef-5892cfd480f1";

const client5 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient5.jpeg?alt=media&token=54ebeab3-13bd-46a3-bbd4-904979c84044";

const client6 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient6.jpeg?alt=media&token=9d4b6a6e-58c0-4e72-b658-7d27fb7ca2f3";

const client7 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient7.png?alt=media&token=5dc8f381-3e20-418d-9215-bd9870bae28e";

const client8 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient8.jpeg?alt=media&token=62cfb00c-5fa3-4622-8fa1-4de0041d9eb2";

const client9 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient9.png?alt=media&token=79ee001a-21db-46d2-8fc1-4726eeacbad5";

const client10 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient10.jpeg?alt=media&token=ea4ca8fe-affc-40c9-b38a-c4377f23a660";
const client11 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient11.png?alt=media&token=374a0f91-a383-4072-ac15-46fdfccd4fe3";
const client12 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient12.jpeg?alt=media&token=b549bfaa-0462-4501-8bef-e711100d0b88";
const client13 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient13.jpeg?alt=media&token=25ebedf0-84cf-45b3-93c2-d004fde4b742";

const client14 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient14.png?alt=media&token=fb7c574f-a410-4faa-85dd-03950f88ab32";

const client15 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient15.jpg?alt=media&token=931ed790-05a5-4d79-bef1-4b193b45fb57";

const client16 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient16.jpg?alt=media&token=d68a41f3-a638-49da-a295-9597a376c429";

const client17 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient17.png?alt=media&token=5acc16af-fc6d-4c1e-b8b3-82846e9c1617";

const client18 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient18.png?alt=media&token=1214ce7e-4e37-40d6-b598-12547cdbbf9d";

const client19 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient19.jpeg?alt=media&token=4687cff3-5140-4f6f-b0fd-77d6788b597d";

const client20 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient20.jpeg?alt=media&token=704531e8-19e0-49b6-914e-879ca16fedc5";

const client21 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient21.jpeg?alt=media&token=23b1371a-8b89-472c-9d4b-eb87bfe0b0e0";
const client22 =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fclient22.jpeg?alt=media&token=cd20c659-5792-4e9d-aea6-4f361f0fdd91";

const logos = [
  { id: 1, src: client1, alt: "Customer 1" },
  { id: 2, src: client2, alt: "Customer 2" },
  { id: 3, src: client3, alt: "Customer 3" },
  { id: 4, src: client4, alt: "Customer 4" },
  { id: 5, src: client5, alt: "Customer 5" },
  { id: 6, src: client6, alt: "Customer 6" },
  { id: 7, src: client7, alt: "Customer 7" },
  { id: 8, src: client8, alt: "Customer 8" },
  { id: 9, src: client9, alt: "Customer 9" },
  { id: 10, src: client10, alt: "Customer 10" },
  { id: 11, src: client11, alt: "Customer 11" },
  { id: 12, src: client12, alt: "Customer 12" },
  { id: 13, src: client13, alt: "Customer 13" },
  { id: 14, src: client14, alt: "Customer 14" },
  { id: 15, src: client15, alt: "Customer 15" },
  { id: 16, src: client16, alt: "Customer 16" },
  { id: 17, src: client17, alt: "Customer 17" },
  { id: 18, src: client18, alt: "Customer 18" },
  { id: 19, src: client19, alt: "Customer 19" },
  { id: 20, src: client20, alt: "Customer 20" },
  { id: 21, src: client21, alt: "Customer 21" },
  { id: 22, src: client22, alt: "Customer 22" },
  // Add more logos as needed
];

const OurClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleZoom = (index) => {
    if (isZoomed && currentIndex === index) {
      setIsZoomed(false);
    } else {
      setIsZoomed(true);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full py-10 bg-gray-100 mt-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out transform gap-x-4 sm:gap-x-0"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / (window.innerWidth < 640 ? 2 : 4)
            }%)`,
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-1/2 sm:w-1/4 border border-gray-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-40 w-auto transition-transform duration-300 ${
                  isZoomed &&
                  currentIndex % logos.length === index % logos.length
                    ? "scale-110"
                    : ""
                }`}
                onClick={() => handleZoom(index % logos.length)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
