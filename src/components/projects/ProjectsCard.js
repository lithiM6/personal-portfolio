import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";

const ProjectsCard = ({ image, title, category, details }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTileClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group" onClick={handleTileClick}>
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="ImageOne"
        />
        <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div>
      </div>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>

      {isPopupOpen && (
        <ProjectPopup 
          title={title}
          details={details}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

// const ProjectPopup = ({ title, details, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 relative opacity-90 min-h-[400px]">
//         <button 
//           className="absolute top-2 right-2 text-2xl font-bold text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-500 transition-colors duration-300" 
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="font-titleFont text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
//         <p className="text-base text-gray-700 dark:text-gray-300">{details}</p>
//       </div>
//     </div>
//   );
// };


export default ProjectsCard ;

