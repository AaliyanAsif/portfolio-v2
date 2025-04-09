import { useState } from "react";
import ShinyText from "./Text/ShinnyText";

import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 z-20 w-full border-b border-gray-700 bg-neutral-950 text-slate-300 hover:text-white start-0 ">
      <div className="flex flex-wrap items-center justify-between w-full p-4">
        {/* Logo Section */}
        <ShinyText
          text="Aaliyan Asif"
          disabled={false}
          speed={3}
          className="p-4 font-mono text-2xl font-semibold lg:text-4xl"
        />

        {/* Right Section */}
        <div className="flex space-x-3 sm:space-x-0 rtl:space-x-reverse md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
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
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center mr-8 justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            {navbarLinks.map((item) => (
              <li key={item}>
                <Link
                  smooth
                  to={`/${item.link}`}
                  className={`block py-2 px-3 rounded-sm text-slate-300 text-2xl lg:text-3xl font-mono ${
                    item.name === "Home"
                      ? "  md:bg-transparent md:text-slate-300 md:dark:text-slate-300"
                      : "text-slate-300 hover:bg-white md:hover:bg-transparent md:hover:text-white dark:text-slate-300  dark:hover:text-white"
                  } md:p-0 md:dark:hover:text-white dark:border-gray-700`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
