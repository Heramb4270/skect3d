import React from "react";
import ContactForm from "../ContactusPage/ContactForm";
import GoogleMapLocation from "../ContactusPage/GoogleMapLocation";
import SubscribePage from "../ContactusPage/SubscribePage";
import AboutusBgVideo from "../Aboutus/AboutusBgVideo";
import ContactUsVideo from "../Aboutus/ContactUsVideo";

const Contactus = () => {
  return (
    <div>
      <ContactUsVideo />
      <ContactForm />
      <GoogleMapLocation />
      <SubscribePage />
    </div>
  );
};

export default Contactus;
