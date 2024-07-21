import React from "react";

const ProjectPopup = ({ title, details, onClose }) => {
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
        <p className="text-base text-gray-700 dark:text-gray-300">{details}</p>
      </div>
    </div>
  );
};

export default ProjectPopup;
