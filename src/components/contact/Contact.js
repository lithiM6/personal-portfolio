import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState("");

  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/);
  };
  // ================= Email Validation End here =================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!message) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && message) {
      emailjs
        .send(
          'service_ivtl7vf', // Replace with your EmailJS service ID
          'template_zrk5v6t', // Replace with your EmailJS template ID
          {
            from_name: clientName,
            from_email: email,
            message: message,
          },
          'TitJSrbVTNDN7W7R9' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccessMsg(
              `Hello  ${clientName}, Your message has been sent successfully. Thank you for your time!`
            );
            setClientName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="w-full">
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            id="form"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessage}
              value={message}
              className={`${
                errMessage
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
