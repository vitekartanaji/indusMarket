import React from "react";
import img1 from "../assets/images/pic9.jpg";
import img2 from "../assets/images/pic10.jpg";
import img3 from "../assets/images/pic11.jpg";
import img4 from "../assets/images/pic12.jpg";

const Instrument = () => {
  return (
    <div>
      <div className="relative w-full mb-10 h-52">
        <img src={img4} className="object-cover w-full h-52" alt="Background" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          <div className="text-5xl">Instrument</div>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen p-8 md:flex-row">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={img1} alt="Instrument" className="h-auto rounded-lg" />
        </div>
        <div className="flex flex-col justify-center w-full px-20 py-4 md:w-1/2">
          <div className="text-xl text-gray-800">Instrument</div>
          <div className="mb-4 text-5xl font-bold text-gray-700">
            Forex Trading
          </div>
          <div className="text-gray-600 text-md">
            We offer low-cost institutional spreads for retail forex traders,
            with flexible leverage up to 500:1, spreads from 0.0 pips, and an
            average execution speed of 20ms. Demo accounts are available for
            those new to the Forex market.
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-screen p-8 md:flex-row">
        <div className="flex flex-col justify-center w-full px-20 py-4 md:w-1/2">
          <div className="text-xl text-gray-800">Instrument</div>
          <div className="mb-4 text-5xl font-bold text-gray-700">
            Metals Trading
          </div>
          <div className="text-gray-600 text-md">
            A precious metal is a rare naturally occurring metallic chemical
            element of high economic value. Precious metals are often referred
            to as the ultimate safe-haven assets during the times of market
            turmoil and high volatility. Because of this a lot of experienced
            investors hold at least some part of their portfolio in precious
            metals.
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={img2} alt="Instrument" className="h-auto rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col w-full h-screen p-8 md:flex-row">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img src={img3} alt="Instrument" className="h-auto rounded-lg" />
        </div>
        <div className="flex flex-col justify-center w-full px-20 py-4 md:w-1/2">
          <div className="text-xl text-gray-800">Instrument</div>
          <div className="mb-4 text-5xl font-bold text-gray-700">
            CFD Trading
          </div>
          <div className="text-gray-600 text-md">
            Also known as Contract For Difference, CFDs allow you to make
            profits by speculating the rise and fall of diverse markets such as
            forex, commodities, shares, stocks, indices and more. You don’t own
            any assets in CFD trading and that’s the best part. With INDUS Market,
            you have the most seamless trading technologies to help you
            speculate the market conditions and take the right call at the right
            time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instrument;
