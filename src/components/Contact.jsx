import React from "react";
import Framermotion from "./Framermotion";
import contact from "../assets/images/contact-img.svg";
import contactBg from "../assets/images/color-sharp2.png";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";
import linkedInImage from "../assets/images/linkedin.svg";
import cv from "../assets/cv/vikas-patel-cv.pdf";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#070a18]">
      <Framermotion>
        <div
          className="bg-cover md:grid md:grid-cols-2 px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="p-2.5">
            <h1 className="text-3xl sm:text-4xl font-bold m-2.5 text-[#FF0066]">
              Contact Me
            </h1>
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-3 mb-2.5 md:m-2.5 animated-icon">
              <div className="text-white flex items-center p-2.5">
                <img className="h-6 pr-2.5" src={phone} alt="phone-icon" />
                <a
                  href="tel:+919589154056"
                  className="text-lg sm:text-2xl break-all hover:text-blue-400"
                >
                  +91 9589154056
                </a>
              </div>

              <div className="text-white flex items-center p-2.5">
                <img
                  className=" h-[25px] pr-2.5"
                  src={email}
                  alt="email-icon"
                />
                <a
                  href="mailto:vikaspatel101299@gmail.com"
                  className="text-xl sm:text-2xl break-all hover:text-blue-400"
                >
                  vikaspatel101299@gmail.com
                </a>
              </div>
              <div className="text-white flex items-center p-2.5">
                <img
                  className=" h-[25px] pr-2.5 "
                  src={linkedInImage}
                  alt="linkedInImage-icon"
                />
                <a
                  href="https://www.linkedin.com/in/vikas-patel-8059931ba/"
                  target="_blank"
                  className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500"
                >
                  Linked In Profile
                </a>
              </div>

              <div className="text-white p-2.5">
                <a
                  href={cv}
                  download
                  className="text-2xl w-52 font-semibold sm:w-3xs flex bg-[#00cfff] p-2 rounded-xl cursor-pointer hover:bg-blue-700 hover:transition-all ease-linear"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="hidden sm:grid justify-end content-center p-2.5 float-end">
            <img className="h-[300px]" src={contact} alt="contact-image" />
          </div>
        </div>
      </Framermotion>
    </div>
  );
};

export default Contact;
