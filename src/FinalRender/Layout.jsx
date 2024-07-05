import React from 'react'
import { Outlet } from "react-router-dom";
import Sketch3dNavbar from '../Sketch3dNavbar/Sketch3dNavbar';
import Footer from '../Pages/Footer';
const Layout = () => {
  return (
    <div>
   <Sketch3dNavbar/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default Layout