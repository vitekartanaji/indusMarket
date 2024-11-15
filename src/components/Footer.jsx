import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-gray-900">
      <div className="container flex flex-col items-start justify-between px-10 py-20 mx-auto md:flex-row md:items-center">
        <div className="w-full mb-6 text-center md:w-1/2 md:mb-0 md:text-left">
          <h2 className="font-bold text-orange-500 text-8xl">
            INDUS
            <br />
            MARKETS
          </h2>
        </div>

        <div className="w-full text-center md:w-1/2 md:text-left">
          <h3 className="mb-4 text-xl font-bold text-center text-orange-500">
            Contact Us
          </h3>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-4 md:mb-0 md:pr-4">
              <p className="font-semibold">INDUS GLOBAL MARKETS LIMITED</p>
              <p className="font-semibold">
                Address -{" "}
                <span className="font-normal">
                  4004,U-Bora Tower, Business Bay, Dubai
                </span>
              </p>
              <p className="font-semibold">
                Mail - <span className="font-normal">info@indusmkts.com</span>
              </p>

              <p className="font-semibold">
                Phone - <span className="font-normal">+971 45147131</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="" />

      <div className="px-20 py-10">
        <p className="font-bold">Risk Warning:</p>
        <br />
        <p className="text-sm text-gray-400">
          An investment in derivatives may mean investors may lose an amount
          even greater than their original investment. Anyone wishing to invest
          in any of the products mentioned in indusmkts.com should seek their
          own financial or professional advice. Trading of securities, forex,
          stock market, commodities, options and futures may not be suitable for
          everyone and involves the risk of losing part or all of your money.
          Trading in the financial markets has large potential rewards, but also
          large potential risk. You must be aware of the risks and be willing to
          accept them in order to invest in the markets. Don't invest and trade
          with money which you can't afford to lose. Forex Trading are not
          allowed in some countries, before investing your money, make sure
          whether your country is allowing this or not.
          <br />
          <br />
          You are strongly advised to obtain independent financial, legal and
          tax advice before proceeding with any currency or spot metals trade.
          Nothing in this site should be read or construed as constituting
          advice on the part of Indus Global Markets Limited or any of its
          affiliates, directors, officers or employees.
          <br />
          <br />
          Restricted Regions: Indus Global Markets Limited does not provide
          services for citizens/residents of the United States, Cuba, Iraq,
          Myanmar, North Korea, Sudan. The services of Indus Global Markets
          Limited are not intended for distribution to, or use by, any person in
          any country or jurisdiction where such distribution or use would be
          contrary to local law or regulation.
          <br />
          <br />
          OR
          <br />
          <br />
          Information on this site is not directed at residents in any country
          or jurisdiction where such distribution or use would be contrary to
          local law or regulation.
        </p>
      </div>
    </div>
  );
};

export default Footer;
