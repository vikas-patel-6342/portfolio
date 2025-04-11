import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleOnClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOnClick);

    return () => {
      document.removeEventListener("mousedown", handleOnClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // scroll 50px ke baad black
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Skills", href: "#skills" },
    { id: 4, name: "Experience", href: "#experience" },
    { id: 5, name: "Projects", href: "#projects" },
    { id: 6, name: "Let's Connect", href: "#contact" },
  ];

  return (
    <nav
      className={`w-full shadow-md fixed top-0 transition-all duration-300 ease-in-out z-[9999] ${
        isScrolled ? "bg-[#010101] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          <div>
            <a href="#">
              <img className="w-20 m-2.5 " src={logo} alt="logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="text-white font-bold hidden md:flex space-x-6">
            {navItems &&
              navItems.map((item) => (
                <span className="hover:text-[#FF0066]" key={item.id}>
                  <a href={item.href}>{item.name}</a>
                </span>
              ))}
          </div>

          {/* Hamburger / Close */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              ref={buttonRef}
              className="text-white cursor-pointer focus:outline-none "
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden px-4 fixed w-full text-center  z-[99999] bg-[#010101] text-white font-bold  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems &&
          navItems.map((item) => (
            <span className="hover:text-[#FF0066] block py-2" key={item.id}>
              <a href={item.href}>{item.name}</a>
            </span>
          ))}
      </div>
    </nav>
  );
}

export default Header;
