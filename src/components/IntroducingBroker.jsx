import React from "react";
import img1 from "../assets/images/pic12.jpg";
import img2 from "../assets/images/pic17.jpeg";

const IntroducingBroker = () => {
  return (
    <div>
      <div className="relative w-full mb-10 h-52">
        <img src={img1} className="object-cover w-full h-52" alt="Background" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          <div className="text-5xl">Introducing Broker</div>
        </div>
      </div>

      <div className="flex px-20 py-10 space-x-4">
        <div className="w-1/2 p-4">
          <img
            src={img2}
            alt="Description"
            className="w-auto h-auto rounded-lg"
          />
        </div>

        <div className="w-1/2 p-4">
          <p>Become Partner</p>
          <p className="text-5xl font-semibold">
            Introducing Brokers <br />
            Program
          </p>
          <p className="py-5 text-lg text-gray-500">
            Our Program setup is easy to start and has a highly competitive,
            volume-based rebate structure.
          </p>
          <br />
          <p className="py-5 text-lg text-gray-500">
            The IB Program is perfect if you have an FX content website, forum,
            or a group of traders that you would like to help get set up with
            INDUS Market. Most IBs can earn a steady income stream by introducing
            or referring just a handful of clients a month to INDUS Market.
          </p>
        </div>
      </div>
      <div className="py-14">
        <p className="text-5xl text-center">Why Should You Become An <br/>Introducing Broker?</p>
      </div>

      <div class="flex justify-between px-20 py-10 space-x-5">
        
        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">Zero Cap On Commissions</p>
          <p class="text-lg text-gray-500">
            At INDUS Market, there are literally no caps on the number of
            commissions you could earn every month. The more you refer, the more
            you earn. As simple as that.
          </p>
        </div>

        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">Easy Onboarding Processes</p>
          <p class="text-lg text-gray-500">
            the onboarding of you as an introducing broker and your clients
            aspart of our network. Minimal paperwork and seamless signup
            experience for both.
          </p>
        </div>

        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">Transparent Reporting</p>
          <p class="text-lg text-gray-500">
            Get all your referral details on your dashboard in the most
            transparent ways possible. Pullout insights and optimize your
            referral strategies any time.
          </p>
        </div>
      </div>

      <div class="flex justify-between px-20 py-10 space-x-5">
        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">User-friendly Platform</p>
          <p class="text-lg text-gray-500">
            The learning curve is zero to minimal on our platform. From
            beginners to veterans, everyonecan become familiar with the tools
            and platforms for trading.
          </p>
        </div>

        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">Custom Contracts</p>
          <p class="text-lg text-gray-500">
            Adding another layer to our transparent operations, we offer
            contracts that can be customized and negotiated based on your
            preferences. No stringent bonding here.
          </p>
        </div>

        <div class="w-1/3 text-center p-10 border hover:bg-slate-400">
          <p class="text-xl font-semibold">Perennial Support</p>
          <p class="text-lg text-gray-500">
            Should you have any questions at any point in your journey as an
            Introducing Broker, oursupport teams are always there by your side
            to help you out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroducingBroker;
