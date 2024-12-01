import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Us" />
      <AboutMe />
      <Title title="Why we are" subTitle="special" />
      <MyServices />
    </section>
  );
};

export default About;
