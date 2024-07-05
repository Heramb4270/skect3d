import React from "react";
import ProjectInformation from "./ProjectInformation";
import Luxiria from "./Luxiria";
import PyramidGloria from "./PyramidGloria";
import Jasmine from "./Jasmine";
import Tattva from "./Tattva";
// import projectimage from '../images/Pyramid/Pyramid/25.jpg'
// import jasmineimage from '../images/Jasmine/12.jpg'
// import luxiriaimage from '../images/luxiria/Lux/1.jpg'
// import pyramidgloriaimage from '../images/Pyramid/Pyramid/25.jpg';
// import tattvaimage from '../images/Tattava/Tattava/exterior/11.jpg';
import ProjectVideo from "../Pages/ProjectVideo";
// import urbanoimage from "./urabano/Final viewURBANO/5.jpg";
import Urbano from "./Urbano";

const urbanoimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Furbanao%2FFinalViewUrbano%2F5.jpg?alt=media&token=54bac526-a7eb-41ae-94fe-5e55142f99c4";

const projectimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid%2F25.jpg?alt=media&token=2fe3a246-830f-4a50-abb5-d2fa11ccb9e9";
const jasmineimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FJasmine%2F12.jpg?alt=media&token=e296b4df-c751-43be-9427-0d26d6e2def3";
const luxiriaimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fluxiria%2F1.jpg?alt=media&token=4b2a6098-f571-4625-a950-eb357ceec908";
const pyramidgloriaimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid%2F25.jpg?alt=media&token=2fe3a246-830f-4a50-abb5-d2fa11ccb9e9";
const tattvaimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FTattava%2Fexterior%2F11.jpg?alt=media&token=27a6741c-8763-4631-835a-0a21b91cdd04";

const ProjectsPage = () => {
  return (
    <div className=" bg-white">
      <div>
        <ProjectVideo />
      </div>
      <div>
        <ProjectInformation
          backgroundImage={projectimage}
          heading={"Miracle Z"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
      <div className=" bg-white">
        <Jasmine
          backgroundImage={jasmineimage}
          heading={"Jasmine,Bangalore"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
      <div>
        <Luxiria
          backgroundImage={luxiriaimage}
          heading={"Luxiria"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
      <div>
        <PyramidGloria
          backgroundImage={pyramidgloriaimage}
          heading={"Pyramid Gloria,Nagpur"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
      <div>
        <Tattva
          backgroundImage={tattvaimage}
          heading={"Tattva,Nagpur"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
      <div>
        <Urbano
          backgroundImage={urbanoimage}
          heading={"Urbano"}
          architect={"architect"}
          projectBy={"project"}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
