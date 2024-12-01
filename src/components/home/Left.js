import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaLinkedin } from "react-icons/fa";
import {  FiInstagram, FiMail } from "react-icons/fi";
import { ransen } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Printing Services", "Designing", "Custom High-Quality Products"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div
      className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-60"
      style={{ marginTop: '33px' }} // Adjust the value as needed
    >
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={ransen}
          loading="priority"
          alt="ransen"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Ransen Graphics Pvt Ltd</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://lk.linkedin.com/company/ransen-graphics-pvt-ltd" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://www.instagram.com/ransengraphics/" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ransengraphics@gmail.com&su=Subject&body=Body" target="_blank" rel="noopener noreferrer">
                <FiMail />
              </a>
            </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Left;
