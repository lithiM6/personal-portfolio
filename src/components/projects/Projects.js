import React, { useState } from "react";
import {
  ImgOne,
  workImgTwo,
  workImgThree,
  workImgFive,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
// import ProjectPopup from "./ProjectPopup";

const projectData = [
  {
    title: "Printing Services",
    category: "",
    image: workImgThree,
    // details: 'Built a full stack website similar to Netflix. Users can sign up and log in to personalized accounts to browse and manage a real-time collection of movies and TV shows, including a watch list feature.',
    // technologies: ["React", "Node", "MongoDB", "Firebase"],
    // repoLink: "https://github.com/SaviNimz/SriFlix" 
  },
    { 
    title: "Brochures and Flyers", 
    category: "", 
    image: ImgOne, 
    // details: "Implemented a high-performance trading system in C++ for a flower exchange. A minimalistic frontend included.",
    // technologies: ["C++", "Python"],
    // repoLink: "https://github.com/SaviNimz/Flower-exchange-Trader-application" 
  }, 

  { 
    title: "Food Boxes", 
    category: "", 
    image: workImgFive, 
    // details: `The Weather Guide web application is machine-learning related application designed to deliver real-time, location-specific weather forecasts tailored for tourists and general users.`,
    // technologies: ["Python", "React", "MongoDB","TensorFlow"],
  },
  { 
    title: "Business Cards", 
    category: "", 
    image: workImgTwo, 
    // details: "Implemented a fully functional interpreter for the RPAL programming language using written using Python.",
    // technologies: ["Python"],
    // repoLink: "https://github.com/SaviNimz/RPAL-interpreter"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // const openPopup = (project) => {
  //   setSelectedProject(project);
  // };

  // const closePopup = () => {
  //   setSelectedProject(null);
  // };

  return (
    <div className="relative">
      <Title title="Services" subTitle="We Provide" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="px-6">
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
              // details={project.details}
              // technologies={project.technologies} // Pass technologies
              // repoLink={project.repoLink} // Pass repoLink
              // onClick={() => openPopup(project)}
            />
          </div>
        ))}
      </div>

      {/* {selectedProject && (
        <ProjectPopup
          title={selectedProject.title}
          details={selectedProject.details}
          technologies={selectedProject.technologies}
          repoLink={selectedProject.repoLink} // Pass repoLink to popup
          onClose={closePopup}
        />
      )} */}
    </div>
  );
};

export default Projects;

