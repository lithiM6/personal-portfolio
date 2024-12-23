import React from "react";
import {
  ImgOne,
  workImgTwo,
  workImgThree,
  workImgFive,
  letterheads,
  calendars,
  traymats
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const projectData = [
  {
    title: "Printing Services",
    image: workImgThree,
  },
  {
    title: "Business Cards",
    image: workImgTwo,
  },
  {
    title: "Brochures and Flyers",
    image: ImgOne,
  },
  {
    title: "Gift/Food Boxes",
    image: workImgFive,
  },
  {
    title: "Calendars",
    image: calendars,
  },
  {
    title: "Tray Mats",
    image: traymats,
  },
  {
    title: "Letterheads and Envelopes",
    image: letterheads,
  }
];

const Projects = () => {
  return (
    <div className="relative">
      <Title title="Services" subTitle="We Provide" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="px-6">
            <ProjectsCard
              title={project.title}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
