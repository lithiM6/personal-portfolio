import React from "react";
import { printing } from "../../assets/services/printing.jpg";

const ServiceCard = ({ title = "Placeholder Title", image = printing }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden w-60">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
