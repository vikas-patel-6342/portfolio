import React from "react";
import fbImage from "../assets/images/facebook.svg";
import linkedInImage from "../assets/images/linkedin.svg";
import instaImage from "../assets/images/instagram.svg";
import copyright from "../assets/images/copyright.svg";
import Framermotion from "./Framermotion";

function Footer() {
  return (
    <div className="bg-[#070a18] text-white">
      <Framermotion>
        <div className="sm:grid grid-cols-2 content-center px-4 sm:px-6 lg:px-8">
          <div className="text-4 p-2.5">
            <p className="flex">
              <img
                className="rounded-full h-[25px] pr-2.5"
                src={copyright}
                alt="copyright-icon"
              />
              Copyright & All Rights are reserverd to Vikas Patel
            </p>
          </div>
          <div className="w-full sm:flex sm:justify-end">
            <div className="grid grid-cols-3 rounded-xl ">
              <a
                className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-120"
                href="https://www.facebook.com/vikaskumarpatel.vicky"
                target="_blank"
              >
                <img
                  className="rounded-full h-[35px]"
                  src={fbImage}
                  alt="fb-icon"
                />
              </a>
              <a
                className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110"
                href="https://www.instagram.com/vikas_patel1012?utm_source=qr&igsh=MWMxcjNxMmZlY3FqdQ=="
                target="_blank"
              >
                <img
                  className="rounded-full  h-[35px]"
                  src={instaImage}
                  alt="insta-icon"
                />
              </a>
              <a
                className="p-2.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110"
                href="https://www.linkedin.com/in/vikas-patel-8059931ba/"
                target="_blank"
              >
                <img
                  className="rounded-full h-[35px]"
                  src={linkedInImage}
                  alt="linkedIn-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default Footer;
