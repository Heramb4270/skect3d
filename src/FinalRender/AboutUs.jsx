import React from 'react'
import VideoFile from '../Aboutus/VideoFile'
import WorkPhilosophy from '../Aboutus/WorkPhilosophy'
import Info from '../Aboutus/Info'
import TeamInfo from '../Aboutus/TeamInfo'
import Reviews from '../Aboutus/Reviews'
import AboutusBgVideo from '../Aboutus/AboutusBgVideo'

const AboutUs = () => {
  return (
    <div>
      <AboutusBgVideo/>
        <VideoFile/>
        <Info/>
        <WorkPhilosophy/>
        <TeamInfo/>
        <Reviews/>
    </div>
  )
}

export default AboutUs