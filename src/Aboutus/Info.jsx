import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20 bg-black text-white">
      {/* Left Part */}
      <div className="flex-1 p-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Why Choose Us.</h2>
          <p className="text-base">
            Discover why leading construction firms choose us to showcase their
            projects online. We specialize in delivering compelling and
            immersive experiences that highlight your construction achievements
            with clarity and professionalism.
          </p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="hidden md:block border-l border-gray-400 h-auto"></div>

      {/* Middle Part */}
      <div className="flex-1 p-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">Our Mission.</h2>
          <p className="text-base">
            Our mission is to redefine how construction projects are presented
            and accessed online. We strive to provide transparent, engaging, and
            informative platforms that empower stakeholders to visualize and
            understand the progress and quality of your projects.
          </p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="hidden md:block border-l border-gray-400 h-auto"></div>

      {/* Right Part */}
      <div className="flex-1  p-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">What We Do.</h2>
          <p className="text-base">
            We specialize in creating visually stunning and informative digital
            presentations of construction sites. Through high-resolution
            imagery, interactive maps, and real-time updates, we ensure your
            projects stand out, attract clients, and demonstrate your commitment
            to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
