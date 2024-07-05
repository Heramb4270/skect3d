import React from "react";
import Tattva from "../Projects/Tattva";
// import tattvaimage from '../images/Tattava/Tattava/exterior/11.jpg'
const tattvaimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F11.jpg?alt=media&token=27a6741c-8763-4631-835a-0a21b91cdd04";
const TattvaPath = () => {
  return (
    <div className="mt-10">
      <Tattva
        backgroundImage={tattvaimage}
        heading={"Tattva"}
        architect={"architect"}
        projectBy={"project"}
      />
    </div>
  );
};

export default TattvaPath;
