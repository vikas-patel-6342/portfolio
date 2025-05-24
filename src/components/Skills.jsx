import React from "react";
import Framermotion from "./Framermotion";
import skillsImage from "../assets/images/skills.png";
import skillBackground from "../assets/images/color-sharp2.png";
import html from "../assets/logo/html-logo.svg";
import css from "../assets/logo/css-logo.svg";
import bootstrap from "../assets/logo/bootstrap-logo.svg";
import tailwind from "../assets/logo/tailwind-logo.svg";
import js from "../assets/logo/js-logo.svg";
import react from "../assets/logo/react-logo.svg";
import php from "../assets/logo/php.svg";
import mysql from "../assets/logo/mysql-logo.svg";
import github from "../assets/images/github.svg";
import software from "../assets/logo/software-testing.svg";

function Skills() {
  const skills = [
    { name: "HTML", image: html, alt: "html-logo" },
    { name: "CSS", image: css, alt: "css-logo" },
    { name: " Bootstrap", image: bootstrap, alt: "bootstrap-logo" },
    { name: " Tailwind CSS", image: tailwind, alt: "tailwind-logo" },
    { name: "JavaScript", image: js, alt: "js-logo" },
    { name: "React.js", image: react, alt: "react-logo" },
    { name: "Basic of Php", image: php, alt: "php-logo" },
    { name: "Basics of MySql", image: mysql, alt: "mysql-logo" },
    { name: "Git and Github", image: github, alt: "github-logo" },
    { name: "Software Testing", image: software, alt: "testing-logo" },
  ];
  return (
    <div className="bg-[#070a18]">
      <Framermotion>
        <div
          id="skills"
          className="bg-cover md:grid grid-cols-[70%_30%] px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: `url(${skillBackground})` }}
        >
          <div className="p-2.5">
            <h1 className="text-3xl text-left sm:text-center sm:text-4xl font-bold m-2 sm:m-2.5 text-[#FF0066]">
              Area of Experties
            </h1>
            <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 m-2.5">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <div className="text-white m-2.5" key={skill.name}>
                    <div className="grid justify-start">
                      <img
                        className="w-20 p-2.5 hover"
                        src={skill.image}
                        alt={skill.alt}
                      />
                      <p className="font-semibold text-xl text-center">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">Skills Not Available</p>
              )}
            </div>
          </div>

          <div className=" hidden md:grid justify-end content-center">
            <img className="w-96" src={skillsImage} alt="skills" />
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default Skills;
