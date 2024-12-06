import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navbarOptions = ["feed", "post", "profile"] as const;

  return (
    <nav className="flex items-center justify-between p-4 text-white bg-[#528362] ">
      {/* Logo */}
      <NavLink to={"/index"}>
        <img
          src="Writer_s-Hub-Logo-1.svg"
          alt="Writer's Hub Logo"
          className="h-16 hover:scale-110 transition-transform"
        />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex justify-between w-[40%] sm:max-w-[300px] md:mr-20 ">
        {navbarOptions.map((item) => (
          <li
            key={item}
            className="p-2 w-[150px] text-center hover:scale-110 transition-transform "
          >
            <NavLink
              to={`/${item}`}
              className="hover:underline hover:decoration-white capitalize"
            >
              {item}
            </NavLink>
          </li>
        ))}
        <Logout />
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-2"
        onClick={() => setNavOpen(!isNavOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isNavOpen && (
        <ul className="absolute top-20 left-0 w-full bg-[#528362] flex flex-col items-center space-y-4 py-4 sm:hidden border-t-2 z-30">
          {navbarOptions.map((item) => (
            <li
              key={item}
              className="p-2 w-[150px] text-center hover:scale-110 transition-transform "
            >
              <Link
                to={`/${item}`}
                className="hover:underline hover:decoration-white capitalize"
              >
                {item}
              </Link>
            </li>
          ))}
          <Logout />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
