import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Validate mobile number
  const validateMobile = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      setMobileError("Invalid mobile number");
    } else if (mobile.length !== 10) {
      setMobileError("Mobile number must have exactly 10 digits");
    } else {
      setMobileError("");
    }
  };

  // Validate email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateMobile();
    validateEmail();

    if (!mobileError && !emailError) {
      axios
        .post("http://localhost:5000/send-email", {
          firstName,
          lastName,
          mobile,
          email,
          message,
        })
        .then((response) => {
          console.log("Email sent successfully");
          window.alert("Response submitted successfully!");
        })
        .catch((error) => {
          console.error("There was an error sending the email!", error);
          window.alert("Error sending email. Please try again later.");
        });
    } else {
      console.log("Form contains errors");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="bg-white rounded-2xl mb-4 w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-black">
          Get in Touch
        </h2>

        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-3">
            <label
              htmlFor="firstname"
              className="block text-black text-xl mb-2"
            >
              First Name
            </label>
            <input
              className="border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pl-3">
            <label htmlFor="lastname" className="block text-black text-xl mb-2">
              Last Name
            </label>
            <input
              className="border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="mobile" className="block text-black text-xl mb-2">
            Mobile Number
          </label>
          <input
            className={`border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline bg-gray-200 ${
              mobileError ? "border-red-500" : ""
            }`}
            id="mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            required
          />
          {mobileError && (
            <span className="text-red-500 text-lg">{mobileError}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-black text-xl mb-2">
            Email Address
          </label>
          <input
            className={`border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline bg-gray-200 ${
              emailError ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {emailError && (
            <span className="text-red-500 text-lg">{emailError}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-black text-xl mb-2">
            Message
          </label>
          <textarea
            className="border rounded w-full py-3 px-4 text-black text-lg leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
            id="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded py-3 px-6 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
