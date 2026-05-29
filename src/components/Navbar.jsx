import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#07152B]/95 backdrop-blur-md text-white fixed top-0 w-full z-50 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <div className="flex items-center gap-4">

          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Arul Groups Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "2px solid #facc15",
              objectFit: "cover"
            }}
          />

          <div>
            <h1 className="text-3xl font-bold text-yellow-400">
              Arul Groups EduTech
            </h1>

          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-300">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSflpbzdzz2aCbjl2uEVp7zS71dklqRPxaTh36StxfgaZW73kA/viewform?usp=dialog"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
            Apply Now
          </button>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;