import React from "react";
// import jasmineimage from "../images/Jasmine/12.jpg";
const jasmineimage =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2FPyramid%2F25.jpg?alt=media&token=2fe3a246-830f-4a50-abb5-d2fa11ccb9e9";
import Jasmine from "../Projects/Jasmine";
import ProjectInformation from "../Projects/ProjectInformation";
const JasminePath = () => {
  return (
    <div className="mt-10">
      <ProjectInformation
        backgroundImage={jasmineimage}
        heading={"MiracleZ"}
        architect={"architect"}
        projectBy={"project"}
      />
    </div>
  );
};

export default JasminePath;
