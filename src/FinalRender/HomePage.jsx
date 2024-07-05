import React, { useEffect, useState } from "react";
import VideoBackground from "../Pages/VideoBackground";
import ProjectInfoCard from "../Pages/ProjectInfoCard";
import ImageGallery from "../Pages/ImageGallery";
import OurClients from "../Pages/OurClients";
import "lazysizes";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";

const HomePage = () => {
  const videoData = [
    {
      videoURL: "https://www.youtube.com/embed/nbRrtekVaEw?si=u1UXqbrQi-Xf2qJy",
      title: "Tattva, Somalwada Nagpur",
      description:
        "The Tattva project is a design project targeting an integrated residential and urban community from Deems Real Estate Development Company. The project is designed while preserving the region's heritage and ancient principles. In the Hail urban project, the scheme has been carefully divided to ensure effective mobility and sustainable comfort. Where all services have been taken into account in strategic and easy-to-access locations to ensure an integrated project.",
      link: "/tattvproject",
    },
    {
      videoURL: "https://www.youtube.com/embed/deZvLWv0U1U?si=tYxJzYdPNTlrrvCO",
      title: "Miracle Z, Jabalpur",
      description:
        "Introducing Miracle Z, a groundbreaking construction project that exemplifies innovation in urban living. Located in a prime area, it redefines modern lifestyles with visionary design and cutting-edge amenities. Miracle Z showcases sustainable architecture that harmonizes with its surroundings while offering luxury and comfort. The project features meticulously crafted interiors and eco-friendly infrastructure, setting new standards in urban development. With a focus on community and sustainability, Miracle Z not only enhances the skyline but also fosters a vibrant, inclusive neighborhood. Experience the future of urban living where visionary design meets unparalleled quality.",
      link: "/jasmineproject",
    },
    // Add more video objects as needed
  ];

  return (
    <div className="bg-white">
      <VideoBackground />
      <ProjectInfoCard videoData={videoData} />
      <OurClients />
      <ImageGallery />
    </div>
  );
};

export default HomePage;
