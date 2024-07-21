import React from "react";
import { BiBrain } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiBrain />}
        title="Machine Learning"
        subTitle={`Nick Bostrom once said, 
          "Machine intelligence is the last invention that 
          humanity will have to make," and I'd love to be a part of it.`}
      />
      <ServicesCard
        icons={<MdAssessment />}
        title="Data Science"
        subTitle="Love the challenge of solving real-world problems through data. I take part actively in various competitions 
        hosted on Kaggle to expand my skills. "
      />
      <ServicesCard
        icons={<FaLaptopCode />}
        title="Web Development"
        subTitle="I enjoy building sleek, responsive websites that cater to various users."
      />
      <ServicesCard
        subTitle="Take a closer look at my coding, soft skills and language proficiencies in the Resume section."
      />
    </div>
    
  );
};

export default MyServices;
