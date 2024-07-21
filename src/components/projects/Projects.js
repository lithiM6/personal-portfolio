

// export default Projects;
import React, { useState } from "react";
import {
  workImgTwo,
  workImgThree,
  workImgFive,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import ProjectPopup from "./ProjectPopup"; // Import ProjectPopup

const projectData = [
  { title: "Blog Website", category: "Website", image: workImgThree, details: "A blogging platform with modern features." },
  { title: "Business Card Design", category: "Website", image: workImgThree, details: "A blogging platform with modern features." },
  { title: "Blog Website", category: "Website", image: workImgTwo, details: "A blogging platform with modern features." },
  { title: "Blog Website", category: "Website", image: workImgFive, details: "A blogging platform with modern features." },

];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    console.log("Opening popup for project:", project); // Added for debugging
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative">
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="px-6">
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
              details={project.details}
              onClick={() => openPopup(project)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          title={selectedProject.title}
          details={selectedProject.details}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Projects;