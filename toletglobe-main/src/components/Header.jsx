import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/to_let_globe_logo.jpeg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-black py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="to-let-globe"
            width={70}
            height={70}
          />
        </NavLink>
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          }   lg:flex flex-col md:flex-col md:gap-9 lg:flex-row lg:space-x-4 lg:gap-10 absolute lg:relative bg-black lg:bg-transparent left-0 top-16 lg:top-0 w-full lg:w-auto lg:pl-0 pl-4 transition-all duration-300`}
        >
          <li>
            <NavLink
              to="/"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/property-listing"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#c8a21c] block lg:inline"
              onClick={closeMenu}
            >
              Property Listing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
