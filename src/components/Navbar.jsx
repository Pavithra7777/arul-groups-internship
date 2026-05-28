import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#07152B]/95 backdrop-blur-md text-white fixed top-0 w-full z-50 shadow-xl border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-yellow-400 tracking-wide">
            Arul Groups
          </h1>

          <p className="text-yellow-300 uppercase text-xs tracking-[3px]">
            Facility Management Services
          </p>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-300">

          <li>
            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#internships" className="hover:text-yellow-400 transition">
              Internships
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-yellow-400 transition">
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSflpbzdzz2aCbjl2uEVp7zS71dklqRPxaTh36StxfgaZW73kA/viewform?usp=dialog"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 hover:bg-yellow-500 transition duration-300 shadow-lg">
            Apply Now
          </button>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;