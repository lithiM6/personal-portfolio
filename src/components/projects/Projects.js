// import React, { useState } from "react";
// import {
//   workImgTwo,
//   workImgThree,
//   workImgFive,
// } from "../../assets";
// import Title from "../home/Title";
// import ProjectsCard from "./ProjectsCard";
// import ProjectPopup from "./ProjectPopup";

// const projectData = [
//   {
//     title: "SriFlix Website",
//     category: "Website",
//     image: workImgThree,
//     details: 'Built a full stack website similar to Netflix. Users can sign up and log in to personalized accounts to browse and manage a real-time collection of movies and TV shows, including a watch list feature.',
//     technologies: ["React", "Node", "MongoDB", "Firebase"],
//     repoLink: "https://github.com/SaviNimz/SriFlix"
//   },
//   { 
//     title: "Business Card Design", 
//     category: "Website", 
//     image: workImgThree, 
//     details: "A blogging platform with modern features.",
//     technologies: [] // Add an empty array or omit if no technologies
//   },
//   { 
//     title: "Blog Website", 
//     category: "Website", 
//     image: workImgTwo, 
//     details: "A blogging platform with modern features.",
//     technologies: [] // Add an empty array or omit if no technologies
//   },
//   { 
//     title: "Blog Website", 
//     category: "Website", 
//     image: workImgFive, 
//     details: "A blogging platform with modern features.",
//     technologies: [] // Add an empty array or omit if no technologies
//   },
// ];

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const openPopup = (project) => {
//     setSelectedProject(project);
//   };

//   const closePopup = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <div className="relative">
//       <Title title="Recent" subTitle="Projects" />
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
//         {projectData.map((project, index) => (
//           <div key={index} className="px-6">
//             <ProjectsCard
//               title={project.title}
//               category={project.category}
//               image={project.image}
//               details={project.details}
//               technologies={project.technologies} // Pass technologies here
//               onClick={() => openPopup(project)}
//             />
//           </div>
//         ))}
//       </div>

//       {selectedProject && (
//         <ProjectPopup
//           title={selectedProject.title}
//           details={selectedProject.details}
//           technologies={selectedProject.technologies}
//           repoLink={selectedProject.repoLink} // Pass technologies to popup
//           onClose={closePopup}
//         />
//       )}
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import {
  ImgOne,
  workImgTwo,
  workImgThree,
  workImgFive,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import ProjectPopup from "./ProjectPopup";

const projectData = [
  {
    title: "SriFlix Website",
    category: "Website",
    image: workImgThree,
    details: 'Built a full stack website similar to Netflix. Users can sign up and log in to personalized accounts to browse and manage a real-time collection of movies and TV shows, including a watch list feature.',
    technologies: ["React", "Node", "MongoDB", "Firebase"],
    repoLink: "https://github.com/SaviNimz/SriFlix" 
  },
    { 
    title: "Flower Exchange Trader Application", 
    category: "Application", 
    image: ImgOne, 
    details: "Implemented a high-performance trading system in C++ for a flower exchange. A python frontend included.",
    technologies: ["C++", "Python"],
    repoLink: "https://github.com/SaviNimz/Flower-exchange-Trader-application" 
  }, 
    { 
    title: "RPAL Interpreter", 
    category: "Interpreter", 
    image: workImgTwo, 
    details: "Implemented a fully functional interpreter for the RPAL programming language using written using Python.",
    technologies: ["Python"],
    repoLink: "https://github.com/SaviNimz/RPAL-interpreter"
  },
  { 
    title: "WeatherGuide", 
    category: "Website", 
    image: workImgFive, 
    details: `The Weather Guide web application is machine-learning related application designed to deliver real-time, location-specific weather forecasts tailored for tourists and general users.`,
    technologies: ["Python", "React", "MongoDB","TensorFlow"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
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
              technologies={project.technologies} // Pass technologies
              repoLink={project.repoLink} // Pass repoLink
              onClick={() => openPopup(project)}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectPopup
          title={selectedProject.title}
          details={selectedProject.details}
          technologies={selectedProject.technologies}
          repoLink={selectedProject.repoLink} // Pass repoLink to popup
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Projects;

