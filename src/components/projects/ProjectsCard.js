import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";

const ProjectsCard = ({ image, title, category, details, technologies, repoLink }) => {
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
          alt={title}
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
          technologies={technologies}
          repoLink={repoLink} 
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ProjectsCard;
