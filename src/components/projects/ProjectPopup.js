import React from "react";
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'; // Import React, Node, Python icons
import { SiMongodb, SiFirebase, SiCplusplus, SiTensorflow } from 'react-icons/si'; // Import MongoDB, Firebase, C++, TensorFlow icons

const technologyIcons = {
  React: <FaReact key="React" />,
  Node: <FaNodeJs key="Node" />,
  MongoDB: <SiMongodb key="MongoDB" />,
  Firebase: <SiFirebase key="Firebase" />,
  "C++": <SiCplusplus key="C++" />,
  Python: <FaPython key="Python" />,
  TensorFlow: <SiTensorflow key="TensorFlow" />
};

const ProjectPopup = ({ title, details, technologies = [], repoLink, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" style={{ zIndex: 9999 }}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 relative opacity-90 min-h-[400px]">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 transition-colors duration-300"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="font-titleFont text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4">{details}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          {technologies.map(tech => (
            <span key={tech} className="text-2xl">
              {technologyIcons[tech] || <span>{tech}</span>} {/* Fallback if icon is not found */}
            </span>
          ))}
        </div>
        <div className="mt-4"> {/* Added margin top to create space */}
          {repoLink && (
            <>
              <br /> {/* Line break */}
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.38c.575.11.793-.25.793-.55v-2.08c-3.231.73-3.923-1.548-3.923-1.548-.532-1.348-1.3-1.71-1.3-1.71-1.063-.726.081-.71.081-.71 1.176.083 1.79 1.212 1.79 1.212 1.047 1.79 2.743 1.271 3.412.971.104-.758.407-1.271.741-1.563-2.591-.293-5.309-1.296-5.309-5.774 0-1.279.457-2.325 1.21-3.14-.12-.293-.525-1.482.115-3.083 0 0 1.004-.323 3.292 1.23.954-.265 1.98-.398 3-.403 1.017.005 2.041.138 2.996.403 2.284-1.555 3.273-1.236 3.273-1.236.641 1.601.238 2.79.116 3.085.762.815 1.205 1.863 1.205 3.14 0 4.487-2.734 5.473-5.329 5.758.418.36.791 1.076.791 2.17v3.226c0 .305.217.665.803.551A11.5 11.5 0 0 0 12 .5z"/>
                </svg>
                GitHub Repository
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
