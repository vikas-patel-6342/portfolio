import React from "react";
import Framermotion from "./Framermotion";

function Experience() {
  const roles = [
    {
      id: 1,
      post: `Front-End Developer`,
      details: ` As a Front-End Developer, I designed and maintained responsive and user-friendly interfaces using HTML, CSS, Bootstrap, and JavaScript. I implemented mobile-first design principles and ensured cross-browser compatibility to improve accessibility. Working closely with backend developers, I integrated functionality to enhance user experience. I also conducted thorough UI testing to identify and resolve usability issues, delivering a seamless and high-performance interface.`,
      duration: `April 2024 – April 2025`,
    },
    {
      id: 2,
      post: `Technical Product Associate`,
      details: `As a Technical Product Associate, I gathered and analyzed client requirements to ensure product features aligned with business goals. I collaborated with product managers and development teams to define and prioritize tasks, managed workflow to ensure timely delivery, and conducted extensive product testing. By identifying bugs and working with cross-functional teams, I helped improve overall product performance. I also delivered product training sessions to internal teams and clients to support smooth onboarding and adoption.`,
      duration: `April 2024 – April 2025`,
    },
  ];
  return (
    <div id="experience" className="bg-[#010101]">
      <Framermotion>
        <div className="px-4 pb-4 sm:px-6  text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FF0066] p-2.5">
            Professional Experience
          </h1>

          {/* Company Block */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#00CFFF] m-2.5">
              Goodpick Technologies Pvt. Ltd.
            </h2>
            <p className="text-sm text-white m-2.5">Noida, India</p>

            <div className="md:grid md:grid-cols-2 animated-icon pb-2.5">
              {roles ? (
                roles.map((role) => (
                  <div
                    className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-3 mb-4 md:m-2.5"
                    key={role.id}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                      {role.post}{" "}
                      <p className="text-sm text-white font-normal">
                        {role.duration}
                      </p>
                    </h3>
                    <ul className="list-disc pl-5 text-white space-y-2">
                      <li className="text-base">{role.details}</li>
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-white">Experience Not defined</p>
              )}
            </div>
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default Experience;
