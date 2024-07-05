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
          <div className="bg-opacity-80 bg-transparent text-white rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">Aryan Khanna</h2>
            <h4 className="mb-2 text-base text-center">Business Executive</h4>
            <p className="text-base">
              "Absolutely stunning villa! The location is perfect, offering
              breathtaking views of the ocean. The interiors are luxurious and
              well-maintained, with all modern amenities. The private pool was a
              highlight for our family. We appreciated the attentive service
              from the staff, who were always ready to assist. We will
              definitely be coming back!"
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">Ishita Sharma</h2>
            <h4 className="mb-2 text-base text-center">
              Social media Influencer
            </h4>
            <p className="text-base">
              "We had a wonderful stay at the villa. The place is spacious and
              beautifully decorated. The kitchen is well-equipped, and the
              bedrooms are very comfortable. The only downside was that the
              Wi-Fi was a bit slow at times, but it didn't affect our overall
              experience too much. Great value for the price!"
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-1">Robert Walsh</h2>
            <h4 className="mb-2 text-base text-center">
              CEO of SoftTech Solutions
            </h4>
            <p className="text-base">
              "Perfect getaway! The villa exceeded our expectations in every
              way. The pool area is fantastic, and we spent most of our time
              there. The living areas are cozy, and the bedrooms offer a lot of
              privacy. The beach is just a short walk away. Highly recommend
              this place for a relaxing vacation."
            </p>
          </div>
          <div className="bg-transparent text-white bg-opacity-80 rounded-lg shadow-lg p-4">
            <h2 className="text-2xl font-semibold mb-2">Ronit Shekhawat</h2>
            <h4 className="mb-2 text-base text-center">Entrepreneur</h4>
            <p className="text-base">
              "This villa is a gem! From the moment we arrived, we felt at home.
              The decor is beautiful, and the villa is very clean. The location
              is ideal, close to shops and restaurants but still very private.
              The pool and outdoor spaces are perfect for entertaining. We had
              an amazing time and would highly recommend it to others."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
