import React from "react";
import Framermotion from "./Framermotion";
import skillBackground from "../assets/images/color-sharp2.png";

function Projects() {
  const projects = [
    {
      name: "UI Design for Taurus Mutual Fund Website",
      details: `Contributed to the front-end design and development of key sections of the Taurus Mutual Fund website.Designed core components including the Header, Footer, Hero Section, and Trending Mutual Fund section with a structured and user-friendly layout.Created a well-organized Sitemap page to enhance site navigation and user experience, especially for informational discovery.Maintained visual consistency and clean desktop-first design aligned with the brand’s professional identity.Focused on UI structure and aesthetics; responsiveness was not in scope for this project.`,
    },
    {
      name: `Single Page Website For the Muds Group`,
      details: `Developed a single-page website for a client (MUDS Management Pvt. Ltd.), focusing on front-end design and user interaction.Built an interactive form with client-side validation to ensure all required fields were filled before proceeding.Implemented a conditional multi-step flow: upon submitting the initial form, a modal popup with a secondary form was triggered.The "Get OTP" button and OTP input field remained hidden and disabled until all fields in the secondary form were properly filled, ensuring a seamless and secure user experience.`,
    },
    {
      name: `Password Recovery & OTP Verification Flow – ERP System`,
      details: `Designed and developed the password recovery and OTP verification flow for an ERP web application, focusing on usability, responsiveness, and security.Built a “Forgot Password” page with required fields and real-time client-side validation to prevent incomplete submissions.Designed an “Enter OTP” interface that activates only after successful form submission, ensuring secure and user-guided recovery steps.Focused on a seamless user experience across devices with responsive layouts and clear UI elements`,
    },
    {
      name: `UI/UX Optimization for BORGERP Website`,
      details: `Contributed to enhancing the responsiveness of multiple sections on the website borgerp.com, ensuring a seamless user experience across devices.Optimized layout and styling for various screen sizes including mobile, tablet, and desktop views.Fixed alignment issues, adjusted grid systems, and implemented media queries to improve mobile responsiveness.Ensured cross-browser compatibility and improved the overall UI/UX for better accessibility and performance.`,
    },
    {
      name: `Responsive Design Enhancements for BORG ERP System`,
      details: `Worked on front-end improvements for the BORG ERP system, focusing on optimizing the user interface for all screen sizes and devices.Made multiple modules of the ERP platform fully responsive using media queries, flexible grids, and modern CSS practices.Improved layout consistency and fixed responsiveness issues across mobile, tablet, and desktop views.Ensured better usability, clean design, and cross-browser compatibility.Collaborated regularly with the development team to implement updates and enhance the user experience.`,
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
