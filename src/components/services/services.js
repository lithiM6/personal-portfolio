import React from "react";
import ServiceCard from "./serviceCard";
import { printing } from "../../assets/services/printing.jpg";

const services = [
  { title: "Printing Services", image: printing },
//   { title: "Graphic Design", image: design },
//   { title: "Consulting", image: consulting },
//   { title: "Web Development", image: development },
//   { title: "Placeholder Service", image: "https://via.placeholder.com/150" },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} image={service.image} />
      ))}
    </div>
  );
};

export default Services;
