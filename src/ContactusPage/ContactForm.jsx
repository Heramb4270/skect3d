import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validate mobile number
  const validateMobile = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      setMobileError('Invalid mobile number');
    } else if (mobile.length !== 10) {
      setMobileError('Mobile number must have exactly 10 digits');
    } else {
      setMobileError('');
    }
  };

  // Validate email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateMobile();
    validateEmail();
    
    if (!mobileError && !emailError) {
      axios.post('http://localhost:5000/send-email', {
        firstName,
        lastName,
        mobile,
        email,
        message,
      })
      .then(response => {
        console.log('Email sent successfully');
        window.alert('Response submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error sending the email!', error);
        window.alert('Error sending email. Please try again later.');
      });
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-40">
      <form
        className="bg-white rounded-2xl px-8 pb-8 mb-4 pt-14 w-full md:w-3/4 lg:w-2/3 xl:w-1/2"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black pb-9">
          Get in Touch
        </h2>
        
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
            <label htmlFor="firstname" className="block text-black">
              First Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
              id="firstname"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pl-2">
            <label htmlFor="lastname" className="block text-black">
              Last Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-black">
            Mobile Number
          </label>
          <input
            className={`border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outlin bg-gray-400 ${mobileError ? 'border-red-500' : ''}`}
            id="mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onBlur={validateMobile}
            required
          />
          {mobileError && <span className="text-red-500">{mobileError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black">
            Email Address
          </label>
          <input
            className={`border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400 ${emailError ? 'border-red-500' : ''}`}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-black">
            Message
          </label>
          <textarea
            className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-400"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-yellow-400 hover:bg-blue-700 text-black rounded py-2 px-4 focus:outline-none focus:shadow-outline"
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
