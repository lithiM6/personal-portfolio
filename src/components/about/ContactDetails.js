import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold"></h2>
      <div className="flex items-center justify-center space-x-2">
        <FaPhoneAlt />
        <span>+94 766234285</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <FaEnvelope />
        <span>ransengraphics@gmail.com</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <FaMapMarkerAlt />
        <span>No. 444/10 B5, Delgahawatte Road, Ratmalana</span>
      </div>
    </div>
  );
};

export default ContactDetails;
