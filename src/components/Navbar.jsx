import React, { useState } from "react";
// import logo from "../assets/images/logo-polaris.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const linkClass = (isActive) =>
    `block px-3 py-2 rounded md:p-0 ${
      isActive
        ? "text-white bg-red-700 md:bg-transparent md:text-green-700 md:dark:text-red-500 dark:bg-red-600 underline"
        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    }`;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-6 mx-auto ">
        <NavLink
          to="/"
          className="flex items-center space-x-3 text-4xl font-bold text-orange-500 rtl:space-x-reverse "
        >
          {/* <img src={} className="h-10 lg:h-12" alt="Polaris Logo" /> */}
          INDUS MARKETS
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`z-50 w-full md:block md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                end
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instrument"
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Instrument
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tools"
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Tools
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/introducing-broker"
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Introducing Broker
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/education"
                onClick={handleLinkClick}
                className={({ isActive }) => linkClass(isActive)}
              >
                Education
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
