import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      {/* Navbar Container */}
      <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        {/* Navbar Items */}
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
            {/* Navbar Menu */}
            <ul className="hidden md:flex">
              <Link activeClass="active" to="home" smooth={true} duration={500}>
                <li>Home</li>
              </Link>

              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
                offset={-200}
              >
                <li>About</li>
              </Link>

              <Link
                activeClass="active"
                to="support"
                smooth={true}
                duration={500}
                offset={-50}
              >
                <li>Support</li>
              </Link>

              <Link
                activeClass="active"
                to="platforms"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <li>Platforms</li>
              </Link>

              <Link
                activeClass="active"
                to="pricing"
                smooth={true}
                duration={500}
                offset={50}
              >
                <li>Pricing</li>
              </Link>
            </ul>
            {/* Navbar Menu */}
          </div>
          {/* Navbar Buttons */}
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {nav === false ? (
              <MenuIcon className="w-5 h-5" />
            ) : (
              <XIcon className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            nav === false ? "hidden" : "absolute bg-zinc-200 w-full px-8 h-auto"
          }
        >
          <Link activeClass="active" to="home" smooth={true} duration={500}>
            <li className="border-b-2 border-zinc-300 w-full py-4">Home</li>
          </Link>

          <Link
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
            offset={-200}
          >
            <li className="border-b-2 border-zinc-300 w-full py-4">About </li>
          </Link>

          <Link
            activeClass="active"
            to="support"
            smooth={true}
            duration={500}
            offset={-50}
          >
            <li className="border-b-2 border-zinc-300 w-full py-4">Support</li>
          </Link>

          <Link
            activeClass="active"
            to="platforms"
            smooth={true}
            duration={500}
            offset={-100}
          >
            <li className="border-b-2 border-zinc-300 w-full py-4">
              Platforms
            </li>
          </Link>

          <Link
            activeClass="active"
            to="pricing"
            smooth={true}
            duration={500}
            offset={50}
          >
            <li className="border-b-2 border-zinc-300 w-full py-4">Pricing</li>
          </Link>

          <div className="py-4 flex flex-col">
            <button className="border-2 px-8 py-3 bg-transparent text-black mb-4">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
        {/* Mobile Menu */}
      </div>
    </>
  );
};

export default Navbar;
