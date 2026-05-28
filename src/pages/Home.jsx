import React from "react";
import { motion } from "framer-motion";

const internships = [
  "Web Development",
  "Python Programming",
  "Java Development",
  "Artificial Intelligence",
  "Data Science",
  "UI/UX Design",
  "Cyber Security",
  "App Development",
];

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-gradient-to-r from-[#07152B] to-[#0B1F3A] min-h-screen flex items-center text-white pt-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Empower Your Future With
              <span className="text-yellow-400">
                {" "}Professional Online Internships
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Join industry-focused internship programs designed
              to enhance practical knowledge, strengthen technical
              skills, and prepare students for professional careers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a href="#internships">
                <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 hover:bg-yellow-500 transition duration-300 shadow-lg">
                  Explore Programs
                </button>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSflpbzdzz2aCbjl2uEVp7zS71dklqRPxaTh36StxfgaZW73kA/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300 font-semibold">
                  Apply Now
                </button>
              </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
              alt="internship"
              className="rounded-[30px] shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

      {/* INTERNSHIP SECTION */}
      <section
        id="internships"
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Internship Programs
            </h2>

            <p className="text-gray-600 mt-3">
              Explore our industry-oriented online internships.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {internships.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[30px] shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {item}
                </h3>

                <div className="mt-4 space-y-2 text-gray-600">
                  <p>📍 Mode: Online</p>
                  <p>📅 Duration: 1 Month / 3 Months</p>
                  <p>🎓 Certificate Available</p>
                </div>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSflpbzdzz2aCbjl2uEVp7zS71dklqRPxaTh36StxfgaZW73kA/viewform?usp=dialog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-yellow-400 w-full mt-5 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-300">
                    Apply Now
                  </button>
                </a>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Why Choose Us
            </h2>

            <p className="text-gray-600 mt-3">
              Industry-focused online internship programs for students and freshers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Flexible Online Internship",
              "Practical Learning Experience",
              "Industry Exposure",
              "Career-Oriented Programs",
              "Skill Development",
              "Certificate Upon Completion",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#07152B] text-white p-8 rounded-[30px] shadow-xl text-center"
              >
                <h3 className="text-xl font-semibold text-yellow-400">
                  {item}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-gray-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="about"
              className="rounded-[30px] shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              About Arul Groups
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-8">
              Arul Groups Facility Management Services provides
              professional online internship opportunities for
              students and freshers to strengthen practical
              knowledge, industry exposure, and career readiness
              through structured internship programs.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflpbzdzz2aCbjl2uEVp7zS71dklqRPxaTh36StxfgaZW73kA/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-yellow-400 mt-8 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
                Apply Now
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        id="faq"
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is this internship online?",
                a: "Yes, all internship programs are completely online."
              },
              {
                q: "Who can apply?",
                a: "Students, freshers, and aspiring professionals can apply."
              },
              {
                q: "What durations are available?",
                a: "Students can choose between 1 Month and 3 Months."
              },
              {
                q: "Will certificate be provided?",
                a: "Certificate is available upon successful completion."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 p-6 rounded-[25px] shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0B1F3A]">
                  {item.q}
                </h3>

                <p className="text-gray-600 mt-2">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#07152B] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-4xl font-bold text-yellow-400">
              Contact Us
            </h2>

            <p className="mt-6 text-lg">
              📍 1st Floor, Ramanujan IT City, Cambridge Towers, SEZ, SH 49A, Tharamani, Chennai, Tamil Nadu 600113
            </p>

            <p className="mt-4 text-lg">
              📧 arulgroupsfacilitymanagementse@gmail.com
            </p>

            <p className="mt-4 text-lg">
              📞 +91 7305318001
            </p>
          </div>

          <div className="rounded-[30px] overflow-hidden shadow-2xl">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Ramanujan%20IT%20City%20Chennai&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-bold text-yellow-400">
            Arul Groups
          </h2>

          <p className="text-yellow-300">
            Facility Management Services
          </p>

          <p className="mt-4">
            © 2026 Arul Groups Facility Management Services.
            All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
};

export default Home;