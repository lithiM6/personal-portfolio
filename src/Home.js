import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-full h-full bg-transparent text-white z-50 flex flex-col items-start justify-between p-4">
      {/* Top Navigation Bar */}
      <div className="w-0 h-16 bg-transparent flex items-center justify-center gap-16 p-2 lgl:flex hidden rounded-lg shadow-lg mx-auto">
        {/* About Section */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("about")}
            className={`${
              activeSection === "about" ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer`}
          >
            <FaUser />
          </span>
          <span className="text-sm mt-2">About</span>
        </div>

        {/* Projects Section */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("projects")}
            className={`${
              activeSection === "projects" ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer`}
          >
            <MdWork />
          </span>
          <span className="text-sm mt-2">Services</span>
        </div>
      </div>

      <div className="w-full h-full flex flex-col lgl:flex-row items-center gap-6 pb-10">
        {/* Left Sidebar */}
        <Left />

        {/* Main Content */}
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* Smaller Devices */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            {activeSection === "about" && <About />}
            {activeSection === "projects" && <Projects />}
          </div>

          {/* Larger Devices */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {activeSection === "about" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}
            {activeSection === "projects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
