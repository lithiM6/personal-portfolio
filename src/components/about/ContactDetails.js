import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="space-y-6 text-center">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-designColor">Contact Us</h2>

      {/* Phone Number */}
      <div className="flex items-center justify-center space-x-3 text-lg">
        <FaPhoneAlt className="text-designColor" />
        <span>+94 766 234 285</span>
        <span>+94 715 911 361</span>
      </div>

      {/* Email Address */}
      <div className="flex items-center justify-center space-x-3 text-lg">
        <FaEnvelope className="text-designColor" />
        <span>ransengraphics@gmail.com</span>
      </div>

      {/* Address */}
      <div className="flex items-center justify-center space-x-3 text-lg">
        <FaMapMarkerAlt className="text-designColor" />
        <span>No.444/2/1 Galle Road, Ratmalana</span>
      </div>
    </div>
  );
};

export default ContactDetails;
