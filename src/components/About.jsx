import React from "react";
import aboutMe from "../assets/images/about-me1.png";
import Framermotion from "./Framermotion";

function About() {
  return (
    <div id="about" className="bg-[#010101]">
      <Framermotion>
        <div className="px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-[40%_60%] text-white">
          <div className="hidden md:grid content-center">
            <img className="float-left" src={aboutMe} alt="about-me" />
          </div>
          <div className="text-left sm:text-center grid content-center p-2.5">
            <h1 className="text-3xl sm:text-4xl font-bold m-2.5 text-[#FF0066]">
              About Me
            </h1>
            <h4 className="text-xl sm:text-2xl font-semibold m-2.5 text-[#00CFFF]">
              Hello ! I am Vikas Patel
            </h4>
            <p className="text-left sm:text-justify text-xl m-2.5">
              I am a passionate and motivated developer eager to collaborate
              with experienced professionals to enhance my problem-solving
              skills, write more efficient code, and gain deeper insights into
              real-world development challenges.
            </p>
            <p className="text-left sm:text-justify text-xl m-2.5">
              I enjoy building scalable, user-centric applications and
              integrating creative features that solve practical problems. My
              dedication to continuous learning fuels my technical and personal
              growth, especially when working alongside dynamic, impact-driven
              teams.
            </p>
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default About;
