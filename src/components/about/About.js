import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";
import ContactDetails from "./ContactDetails";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Us" />
      <AboutMe />
      <Title title="Get in" subTitle="Touch" />
      {/* <MyServices /> */}
      <ContactDetails />
    </section>
  );
};

export default About;
