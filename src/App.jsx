import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoBackground from "./Pages/VideoBackground";
import "@fortawesome/fontawesome-free/css/all.css";
import Footer from "./Pages/Footer";
import HomePage from "./FinalRender/HomePage";
import Contactus from "./FinalRender/Contactus";
import AboutUs from "./FinalRender/AboutUs";
import ExteriorImageGrid from "./Exterior/ExteriorImageGrid";
import Sketch3dNavbar from "./Sketch3dNavbar/Sketch3dNavbar";
import InteriorImageGrid from "./Interior/InteriorImageGrid";
import AllPage from "./AllSection/AllPage";
import VR from "./VR/VR";
import Layout from "./FinalRender/Layout";
import ProjectsPage from "./Projects/ProjectsPage";
import JasmineExterior from "./Exterior/JasmineExterior";
import TattvaInterior from "./Interior/TattvaInterior";
import TattvaExterior from "./Exterior/TattvaExterior";
import TattvaPath from "./HometoProjectPath/TattvaPath";
import JasminePath from "./HometoProjectPath/JasminePath";
import UrbanoExterior from "./Exterior/UrbanoExterior";
import ProjectInformation from "./Projects/ProjectInformation";
import LuxiriaExterior from "./Exterior/LuxiriaExterior";
import MiracleZ from "./Exterior/MiracleZ";
import MiracleZInterior from "./Interior/MiracleZInterior";
import JasmineInterior from "./Interior/JasminInterior";
import PyramidInterior from "./Interior/PyramidInterior";
import UrbanoInterior from "./Interior/UrbanoInterior";

function App() {
  const googleApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

  return (
    <div style={{ fontFamily: "Libre Baskerville-Bold" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            {/* <Route path='/360vr' element={<VR />}></Route> */}
            <Route path="/miraclez" element={<MiracleZ />}></Route>
            <Route
              path="/miraclezInterior"
              element={<MiracleZInterior />}
            ></Route>
            <Route path="/urbanoInterior" element={<UrbanoInterior />}></Route>
            <Route
              path="/jasmineInterior"
              element={<JasmineInterior />}
            ></Route>
            <Route
              path="/pyramidInterior"
              element={<PyramidInterior />}
            ></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
            <Route path="/interior" element={<InteriorImageGrid />}></Route>
            <Route path="/exterior" element={<ExteriorImageGrid />}></Route>
            <Route
              path="/jasmineexterior"
              element={<JasmineExterior />}
            ></Route>
            <Route
              path="/luxiriaexterior"
              element={<LuxiriaExterior />}
            ></Route>
            <Route path="/tattvainterior" element={<TattvaInterior />}></Route>
            <Route path="/tattvaexterior" element={<TattvaExterior />}></Route>
            <Route path="/urbanoexterior" element={<UrbanoExterior />}></Route>
            <Route path="/tattvproject" element={<TattvaPath />}></Route>
            <Route path="/jasmineproject" element={<JasminePath />}></Route>
            <Route path="/all" element={<AllPage />}></Route>
            {/* <Route path='/vr' element={<VR />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
