import React from "react";
import ContactForm from "../ContactusPage/ContactForm";
import GoogleMapLocation from "../ContactusPage/GoogleMapLocation";
import SubscribePage from "../ContactusPage/SubscribePage";
import ContactUsVideo from "../Aboutus/ContactUsVideo";

const Contactus = () => {
  const clientEmail = "client@example.com";
  const clientPhone = "+91 9595376600 | +91 9518913547";

  const ContactInfo = () => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8 w-full h-full">
      <div className="px-6 py-8 ">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Contact Information
          </h3>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p>
              <a
                href="mailto:sketchers3dofficial@gmail.com"
                className="ml-3 text-lg text-black font-bold"
              >
                sketchers3dofficial@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="ml-3 text-lg text-black font-bold">
              {clientPhone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black ">
      <ContactUsVideo />
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <ContactInfo />
        <div className="bg-white mt-20 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
      {/* <GoogleMapLocation /> */}
      <SubscribePage />
    </div>
  );
};

export default Contactus;
