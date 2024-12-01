import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center pb-6">
      <div className="w-full md:w-3/4 text-zinc-400 px-6 py-6 border-b-[1px] border-b-zinc-800">
        <h2 className="font-semibold text-2xl mb-4 text-white">Hello! We are Ransen Graphics!</h2>
        <p className="text-base leading-6 text-gray-300">
        Ransen Graphics is an established, family-owned printing company founded by an industry veteran with over 40 years of experience. 
Our mission is to provide top-tier printing services, ensuring quality and swift, reliable delivery. We combine traditional craftsmanship with technology to meet the diverse needs of our clients, always striving to exceed expectations with every project. 
<br /><br />
At Ransen Graphics, we are committed to excellence, innovation, and customer satisfaction, making us your trusted partner for all your printing needs 
</p>
      </div>
    </div>
  );
};

export default AboutMe;
