import React from 'react'

const SubscribePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
    {/* Heading */}
    <h1 className="text-3xl font-bold text-center mb-4">
      Subscribe
    </h1>
    
    {/* Description */}
    <p className="text-lg text-center mb-8">
      Sign up with your email address to receive our news letter and latest projects updates.
    </p>

    {/* Form */}
    <div className="flex flex-col md:flex-row justify-center items-center w-full">
      <input
        className="shadow appearance-none border rounded py-2 px-3 mb-3 md:mb-0 md:mr-2 w-full md:w-auto"
        id="firstname"
        type="text"
        placeholder="First Name"
        required
      />
      <input
        className="shadow appearance-none border rounded py-2 px-3 mb-3 md:mb-0 md:mr-2 w-full md:w-auto"
        id="lastname"
        type="text"
        placeholder="Last Name"
        required
      />
      <input
        className="shadow appearance-none border rounded py-2 px-3 mb-3 md:mb-0 md:mr-2 w-full md:w-auto"
        id="email"
        type="email"
        placeholder="Email Address"
        required
      />
      <button className="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded">
        Sign Up
      </button>
    </div>
    <p className="text-center text-sm mb-8 mt-5">
      we respect your privacy
    </p>
  </div>
     
  )
}

export default SubscribePage