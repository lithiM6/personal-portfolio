
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);

  const handleNavigationClick = (section) => {
    setAbout(section === "about");
    setResume(section === "resume");
    setProjects(section === "projects");
    setBlog(section === "blog");
    setContact(section === "contact");
  };

  return (
    <div className="w-full h-full bg-transparent text-white z-50 flex flex-col items-start justify-between p-4">
      {/* ================= Top Nav Bar Start here ======================== */}
      <div className="w-0 h-16 bg-transparent flex items-center justify-center gap-16 p-2 lgl:flex hidden rounded-lg shadow-lg mx-auto">
        {/* About Icon */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("about")}
            className={`${
              about ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaUser />
          </span>
          <span className="text-sm mt-2">About</span>
        </div>
        {/* Resume Icon */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("resume")}
            className={`${
              resume ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <IoIosPaper />
          </span>
          <span className="text-sm mt-2">Resume</span>
        </div>
        {/* Project Icon */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("projects")}
            className={`${
              projects ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <MdWork />
          </span>
          <span className="text-sm mt-2">Projects</span>
        </div>
        {/* Contact Icon */}
        <div className="flex flex-col items-center">
          <span
            onClick={() => handleNavigationClick("contact")}
            className={`${
              contact ? "text-designColor" : "text-textColor"
            } text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group`}
          >
            <FaEnvelope />
          </span>
          <span className="text-sm mt-2">Contact</span>
        </div>
      </div>
      {/* ================= Top Nav Bar End here ======================== */}

      <div className="w-full h-full flex flex-col lgl:flex-row items-center gap-6">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 h-[95%] bg-bodyColor rounded-2xl flex justify-center items-center">
          {/* ======================== Smaller device content Start ======================== */}
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-6">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
          {/* ======================== Smaller device content End ========================== */}
          <div className="w-full h-[96%] hidden lgl:flex justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            )}

            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {contact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;