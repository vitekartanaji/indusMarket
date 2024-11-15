import React from "react";
import img1 from "../assets/images/pic1.jpg";
import img2 from "../assets/images/pic6.png";
import img3 from "../assets/images/pic7.png";
import img4 from "../assets/images/pic8.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-screen">
        <img src={img1} className="object-cover w-full h-full" alt="Background" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 font-bold text-white">
          <div className="text-5xl">Trade Smart</div>
          <div className="text-7xl">Trade Fast</div>
          <div className="text-7xl">Trade Fearless</div>
          <div className="text-lg">
            We are in the good books of more than 5000 traders worldwide
          </div>
        </div>
      </div>

      <div className="p-16 text-center">
        <p className="text-5xl font-bold">Our Trading Instruments</p>
      </div>
      <div className="px-64 pb-16">
        <p className="text-center">
          Forex trading is the untapped, most preferred, and active investment
          market across the globe. The forex trading market has so many untapped
          diversified trading instruments for preferred investments.
        </p>
      </div>

      <div className="flex-grow p-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-10 transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-green-200">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={img2}
                alt="Instrument 1"
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-center">
                Forex Trading
              </h3>
              <p className="mt-2 text-center text-gray-600 text-md">
                Participate in the world’s most active forex trading market with extreme volatility.
              </p>
            </div>
          </div>

          <div className="p-10 transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-green-200">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={img3}
                alt="Instrument 2"
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-center">
                CFD's
              </h3>
              <p className="mt-2 text-center text-gray-600 text-md">
                Trade 30+ CFD instruments with superior trading conditions & tight spreads on MT5 Platform.
              </p>
            </div>
          </div>

          <div className="p-10 transition-all duration-300 bg-white rounded-lg shadow-md hover:bg-green-200">
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={img4}
                alt="Instrument 3"
                className="object-cover rounded-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold text-center">
                Metals
              </h3>
              <p className="mt-2 text-center text-gray-600 text-md">
                Trade in major precious metals like gold, silver, copper, etc. from a single account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
