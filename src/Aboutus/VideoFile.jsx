import React from "react";
// import aboutusvideo from '../Videos/Fren_Goa_01.mp4'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import { useState, useEffect } from "react";
import "lazysizes";
const VideoFile = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-24">
      <video
        className="lazyload absolute top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/videos%2FFren_Goa_01.mp4?alt=media&token=2e017246-3533-4b07-99a1-265c036d709f"
          }
          type="video/mp4"
        />
        {/* Add additional source elements for different video formats if needed */}
      </video>
    </div>
  );
};

export default VideoFile;
