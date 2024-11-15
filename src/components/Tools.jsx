import React from "react";
import img1 from "../assets/images/pic13.jpg";
import img2 from "../assets/images/pic14.jpg";
import img3 from "../assets/images/pic15.png";
import img4 from "../assets/images/pic16.png";
import img5 from "../assets/images/pic12.jpg";

const Tools = () => {
  return (
    <div>
      <div className="relative w-full mb-10 h-52">
        <img src={img5} className="object-cover w-full h-52" alt="Background" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          <div className="text-5xl">Metatrader 5</div>
        </div>
      </div>

      <div class="flex justify-between px-20 py-10">
        <div class="w-1/4 text-center p-4 border">
          <img
            src={img2}
            alt="Windows"
            class="w-16 h-16 mx-auto mb-4"
          />
          <p class="text-xl font-semibold">Windows</p>
          <p class="text-sm text-gray-500">Metatrader 5</p>
        </div>

        <div class="w-1/4 text-center p-4 border">
          <img
            src={img3}
            alt="Mac OS"
            class="w-16 h-16 mx-auto mb-4"
          />
          <p class="text-xl font-semibold">Mac OS</p>
          <p class="text-sm text-gray-500">Metatrader 5</p>
        </div>

        <div class="w-1/4 text-center p-4 border">
          <img
            src={img4}
            alt="Android"
            class="w-16 h-16 mx-auto mb-4"
          />
          <p class="text-xl font-semibold">Android</p>
          <p class="text-sm text-gray-500">Metatrader 5</p>
        </div>
      </div>

      <div className="flex px-20 py-10 space-x-4">
        <div className="w-1/2 p-4">
          <p className="text-5xl font-semibold">
            Be a better trader with <br />
            Metatrader 5
          </p>
          <p className="py-5 text-lg text-gray-500">
            MetaTrader 5 is the latest revolution in electronic trading that
            comes with advanced technologies and distributed algorithms to
            provide the most rewarding trading experience. MetaTrader 5 is used
            widely around the globe by amateurs and professional traders, alike.
          </p>
          <p className="pt-5 text-2xl text-gray-500">Real Time ECN Connectivity</p>
          <p className="text-lg text-gray-500">
            Get tightest spreads, highest liquidity and best trading conditions
            with real-time ECN connectivity on SpotX accounts.
          </p>
          <p className="pt-5 text-2xl text-gray-500">Prompt Order Execution</p>
          <p className="text-lg text-gray-500">
            Our low-latency servers and dedicated server lines ensure blazing
            fast order execution, anytime, anywhere.
          </p>
          <p className="pt-5 text-2xl text-gray-500">Enjoy Restriction-Less Trading</p>
          <p className="text-lg text-gray-500">
            With Indus Market MetaTrader 5, you will never feel the problem of
            restrictions on trade orders. You can place orders at any level and
            even enjoy hedge positions without worrying about FIFO rules.
          </p>
        </div>

        <div className="w-1/2 p-4">
          <img
            src={img1}
            alt="Description"
            className="w-auto h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
