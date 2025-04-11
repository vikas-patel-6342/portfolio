import React from "react";
import Framermotion from "./Framermotion";
import skillBackground from "../assets/images/color-sharp2.png";
import { div } from "framer-motion/client";

function Projects() {
  const projects = [
    {
      name: "ERP System – Frontend Development & Responsiveness",
      details:
        "Worked on the frontend of the company's internal ERP system, enhancing UI/UX using HTML, CSS, JavaScript, and Bootstrap.",
    },
    {
      name: "Client One-Page Website",
      details:
        "Designed and developed one-page website for a company client using HTML, CSS, Bootstrap, and JavaScript.",
    },
    {
      name: "Other Projects & Enhancements",
      details:
        "Worked on multiple client websites, implementing minor UI/UX improvements, responsiveness fixes, and bug resolutions.",
    },
  ];
  return (
    <div id="projects" className="bg-[#070a18]">
      <Framermotion>
        <div
          className="bg-cover md:grid px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: `url(${skillBackground})` }}
        >
          <div className="content">
            <h1 className="text-3xl md:text-4xl font-bold text-[#FF0066] p-2.5">
              Projects
            </h1>
            <p className="text-white text-base p-2.5">
              Here are some of the projects I’ve worked on, showcasing my skills
              in front-end development, responsive design. These projects
              reflect my ability to solve problems, build interactive UIs, and
              manage complete workflows from planning to deployment.
            </p>
            <div className="md:grid md:grid-cols-3 animated-icon pb-2.5">
              {projects ? (
                projects.map((project) => (
                  <div
                    className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-3 mb-2.5 md:m-2.5"
                    key={project.name}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {project.name}
                    </h3>
                    <ul className="list-disc pl-5 text-white space-y-2">
                      <li className="text-base">{project.details}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <h4 className="text-white font-semibold text-xl">
                  No Projects Available
                </h4>
              )}
            </div>
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default Projects;
