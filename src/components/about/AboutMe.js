import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center pb-6">
      <div className="w-full md:w-3/4 text-zinc-400 px-6 py-6 border-b-[1px] border-b-zinc-800">
        <h2 className="font-semibold text-2xl mb-4 text-white">Hello! I'm Chemini Mallikarachchi</h2>
        <p className="text-base leading-6 text-gray-300">
  I'm a Computer Science and Engineering undergraduate from Sri Lanka, currently in my third year at the University of Moratuwa, specializing in Data Science Engineering.
  <br /><br />
  Apart from coding, I enjoy organizing projects and events which provide corporate exposure with like-minded peers.
</p>
      </div>
    </div>
  );
};

export default AboutMe;
