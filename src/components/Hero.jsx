import React, { useState, useEffect } from "react";
import Framermotion from "./Framermotion";
import bannerImage from "../assets/images/banner-bg.png";
import heroImage from "../assets/images/header-img.svg";
import fbImage from "../assets/images/facebook.svg";
import linkedInImage from "../assets/images/linkedin.svg";
import instaImage from "../assets/images/instagram.svg";

function Hero() {
  const titles = [
    "Vikas Patel",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentTitle = titles[index];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));
        setTypingSpeed(200); // typing speed
        if (text === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000); // pause after full word
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));
        setTypingSpeed(50); // deleting speed
        if (text === "") {
          setIsDeleting(false);
          setIndex((index + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div
      id="home"
      className="relative w-full bg-cover bg-center h-[60vh] lg:h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <Framermotion>
        <div className="relative top-24 sm:grid sm:grid-cols-[70%_30%]">
          <div className="px-4 sm:px-6 lg:px-8 md:grid content-center">
            <span
              className="text-xl cursor-pointer md:text-2xl w-96 border rounded-2xl p-2.5 font-bold text-white text-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110"
              id="hero-span"
              style={{
                background:
                  "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
              }}
            >
              Welcome to My Porfolio
            </span>
            <h1 className="text-[#FF0066] mt-4 text-4xl md:text-6xl font-medium">
              I am{" "}
              <span className="border-r-2 border-white animate-pulse">
                {text}
              </span>
            </h1>

            <div className="flex justify-evenly bg-gray-300 border-gray-300 rounded-xl p-2.5 w-3xs mt-8">
              <a
                className="animated-icon p-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-120"
                href="https://www.facebook.com/vikaskumarpatel.vicky"
                target="_blank"
              >
                <img
                  className="rounded-full h-[40px]"
                  src={fbImage}
                  alt="fb-icon"
                />
              </a>
              <a
                className="animated-icon p-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110"
                href="https://www.instagram.com/vikas_patel1012?utm_source=qr&igsh=MWMxcjNxMmZlY3FqdQ=="
                target="_blank"
              >
                <img
                  className="rounded-full  h-[40px]"
                  src={instaImage}
                  alt="insta-icon"
                />
              </a>
              <a
                className="animated-icon p-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110"
                href="https://www.linkedin.com/in/vikas-patel-8059931ba/"
                target="_blank"
              >
                <img
                  className="rounded-full h-[40px]"
                  src={linkedInImage}
                  alt="linkedIn-icon"
                />
              </a>
            </div>
          </div>
          <div className="hidden sm:block">
            <img
              className="animated-image md:h-[450px] md:w-[450px]"
              src={heroImage}
              alt="robot-image"
            />
          </div>
        </div>
      </Framermotion>
    </div>
  );
}

export default Hero;
