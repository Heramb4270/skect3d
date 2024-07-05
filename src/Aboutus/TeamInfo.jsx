import React from "react";
// import founder from "../images/founder.jpeg";
// import cofounder from "../images/cofounder.jpeg";
// import teamlead from "../images/teamlead.jpg";
// import sales_and_marketing_manager from "../images/sales_and_marketing_manager.jpeg";

const founder =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Ffounder.jpeg?alt=media&token=44aff333-7f40-47b0-a07e-4c61382be77a";

const cofounder =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fcofounder.jpeg?alt=media&token=6a6a9a3e-ed5b-4af9-9e39-dd2694ba40d1";
const teamlead =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fteamlead.jpg?alt=media&token=1caab0c3-949a-474b-9367-acbcd1c74eee";
const sales_and_marketing_manager =
  "https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fsales_and_marketing_manager.jpeg?alt=media&token=b3640fae-6cb3-4236-8b4b-9d472005c743";
const TeamInfo = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 mt-10 bg-black text-white">
      <h2 className="text-2xl font-bold text-center mb-2">Meet The Team</h2>
      <p className="text-lg text-center">
        Meet our team of professionals to serve you
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Card 1 */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex">
          <div className="bg-black rounded-lg overflow-hidden border border-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105 hover:border-black flex flex-col w-full">
            {/* Card image */}
            <img src={founder} alt="Founder" className="w-full h-auto" />
            {/* Card content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-center transition-all duration-300 hover:text-lg hover:font-bold">
                  Founder
                </p>
                <h3 className="text-lg font-bold mb-2 text-center transition-all duration-300 hover:text-2xl hover:font-bold">
                  Manish M Kelwadkar
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex">
          <div className="bg-black rounded-lg overflow-hidden border border-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105 hover:border-black flex flex-col w-full">
            {/* Card image */}
            <img src={cofounder} alt="Co-Founder" className="w-full h-auto" />
            {/* Card content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-center transition-all duration-300 hover:text-lg hover:font-bold">
                  Co-Founder
                </p>
                <h3 className="text-lg font-bold mb-2 text-center transition-all duration-300 hover:text-2xl hover:font-bold">
                  Shirin Walilace
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex">
          <div className="bg-black rounded-lg overflow-hidden border border-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105 hover:border-black flex flex-col w-full">
            {/* Card image */}
            <img src={teamlead} alt="Team Lead" className="w-full h-auto" />
            {/* Card content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-center transition-all duration-300 hover:text-lg hover:font-bold">
                  Team Lead
                </p>
                <h3 className="text-lg font-bold mb-2 text-center transition-all duration-300 hover:text-2xl hover:font-bold">
                  Mohit Shukla
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex">
          <div className="bg-black rounded-lg overflow-hidden border border-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105 hover:border-black flex flex-col w-full">
            {/* Card image */}
            <img
              src={sales_and_marketing_manager}
              alt="Sales and Marketing Manager"
              className="w-full h-auto"
            />
            {/* Card content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-center transition-all duration-300 hover:text-lg hover:font-bold">
                  Sales and Marketing Manager
                </p>
                <h3 className="text-lg font-bold mb-2 text-center transition-all duration-300 hover:text-2xl hover:font-bold">
                  Chintamani Rane
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex">
          <div className="bg-black rounded-lg overflow-hidden border border-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105 hover:border-black flex flex-col w-full">
            {/* Card image */}
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Senior 3D Visualizer and Production Manager"
              className="w-full h-auto"
            />
            {/* Card content */}
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-center transition-all duration-300 hover:text-lg hover:font-bold">
                  Team Lead
                </p>
                <h3 className="text-lg font-bold mb-2 text-center transition-all duration-300 hover:text-2xl hover:font-bold">
                  Atul Hiraskar
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
