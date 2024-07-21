import React from "react";
import { GiOwl } from "react-icons/gi";
import { FaMicrophone, FaCompass, FaRegMoon  } from "react-icons/fa";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<FaMicrophone />} des="Public Speaker" />
      <FunFactCard icon={<FaCompass />} des="Adventurous" />
      <FunFactCard icon={<GiOwl />} des="Night Owl" />
      <FunFactCard icon={<FaRegMoon />} des="Dark-Mode" />
    </div>
  );
};

export default FunFact;
