import React from 'react'

const AllPage = () => {
  const navigateToPage = (page) => {
    window.location.href = `/${page}`;
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative mt-10 bg-black">
      {/* Buttons container */}
      <div className="flex justify-center space-x-4 mb-8 mt-8">
      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => navigateToPage('all')}>
        All
      </button> */}
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg" onClick={() => navigateToPage('interior')}>
        Interior
      </button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg" onClick={() => navigateToPage('exterior')}>
        Exterior
      </button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded-lg" onClick={() => navigateToPage('vr')}>
        VR
      </button>
    </div>

      Full-screen image
      <div className="w-full h-screen bg-cover bg-center relative mb-8" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7168562/pexels-photo-7168562.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
        {/* Overlay div with opacity */}
        <div className="absolute inset-0 flex flex-col items-center justify-end">
          <div className="h-1/3 bg-white bg-opacity-50 flex flex-col items-center justify-end p-4 w-full">
            {/* Heading and line */}
            <div className="text-black text-center">
              <h1 className="text-4xl font-bold mb-2">LE PARQUE BY GALA AHMEDABAD (INDIA)</h1>
              <p className="font-bold text-lg mb-0.5">Architect & Landscape :Bill bensley</p>
              <p className="font-bold text-lg mb-0.5">Project by : Gala Infra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPage
