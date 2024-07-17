import React from "react";

const Reviews = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen mt-10"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/deo-project-201f2.appspot.com/o/images%2Fmovie-night-by-pool-whole-family.jpg?alt=media&token=5f54e31f-2876-4782-a4ac-106f8eae947f')",
      }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center p-4 rounded-md mt-10 mb-10">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Review's Villa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Four cards in a row */}
          <div className="bg-opacity-80 bg-transparent text-white rounded-lg shadow-lg p-4 ">
            <h2 className="text-xl font-semibold mb-2">Aryan Khanna</h2>
            <h4 className="mb-2 text-base ">
              Impressive Quality and Attention to Detail
            </h4>
            <p className="text-base text-justify">
              "Sketchers 3D Company has consistently delivered exceptional 3D
              rendering services for our projects. Their attention to detail and
              commitment to quality is unparalleled. Each project they have
              worked on showcases their expertise and dedication to excellence.
              We are particularly impressed with their ability to transform our
              visions into stunning visual representations. Their team is
              professional, responsive, and always willing to go the extra mile
              to ensure client satisfaction. Highly recommended!"
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">Ishita Sharma</h2>
            <h4 className="mb-2 text-base ">
              Professional and Reliable Service
            </h4>
            <p className="text-base">
              "Working with Sketchers 3D Company has been a game-changer for our
              architectural projects. Their 3D renderings are not only visually
              stunning but also accurate and realistic. The team's
              professionalism and reliability make the entire process smooth and
              hassle-free. They have consistently exceeded our expectations. We
              appreciate their prompt communication and ability to meet tight
              deadlines without compromising on quality.""
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-1">Robert Walsh</h2>
            <h4 className="mb-2 text-base ">
              Exceptional Creativity and Technical Skill
            </h4>
            <p className="text-base">
              "Sketchers 3D Company stands out for their exceptional creativity
              and technical skill. They have a knack for bringing even the most
              complex ideas to life with their 3D renderings. The level of
              detail and realism in their renderings has significantly enhanced
              our presentations and marketing materials. Their team is talented,
              easy to work with, and always open to feedback. We look forward to
              continuing our collaboration with them."
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">Ronit Shekhawat</h2>
            <h4 className="mb-2 text-base">Top-Notch 3D Rendering Services</h4>
            <p className="text-base">
              "We have engaged Sketchers 3D Company for several projects, and
              their 3D rendering services are top-notch. Their ability to
              capture the essence of our designs and present them in a visually
              appealing manner is impressive. The team's expertise and
              dedication are evident in every project they undertake. They are
              efficient, responsive, and deliver high-quality work within the
              agreed timelines. We highly recommend Sketchers 3D Company to
              anyone in need of outstanding 3D rendering services."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
