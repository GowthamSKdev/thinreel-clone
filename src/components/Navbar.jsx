// import { Instagram, Menu } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/Images/wisecrackBLACK-.png";
// import gsap from "gsap";
// const Navlinks = [
//   { name: "About Us", path: "/" },
//   { name: "Our Work", path: "#work" },
//   { name: "Our World", path: "/" },
// ];

// const HandleScrollToContact = () => {
//   gsap.to(window, {
//     duration: 1, // duration of scroll
//     scrollTo: "#contact", // your target section ID or class
//     ease: "power2.out", // easing
//   });
// };

// export default function Navbar() {
//   return (
//     <nav className="h-16 px-4 container mx-auto flex justify-between items-center font-BebasNeue text-xl tracking-wider">
//       <div className="flex flex-col items-center justify-center gap-2 lg:hidden">
//         <div className="w-8 h-px bg-white" />
//         <div className="w-8 h-px bg-white" />
//       </div>
//       <div className="hidden lg:flex items-center gap-2 tracking-tight">
//         {Navlinks.map((link) => (
//           <Link className="hover:text-accent" key={link.name} to={link.path}>
//             {link.name}
//           </Link>
//         ))}
//       </div>
//       <p className="hover:text-accent flex items-center">
//         {" "}
//         <span>
//           <img
//             src={logo}
//             alt="logo"
//             className="object-cover object-center"
//             height={80}
//             width={80}
//           />
//         </span>{" "}
//         The Wise Crack
//       </p>

//       <div className="lg:hidden">
//         <Link to={"https://www.instagram.com/wisecrack_tpc/?hl=en"}>
//           <Instagram />
//         </Link>
//       </div>
//       <div
//         className="hover:text-accent hidden lg:block cursor-pointer"
//         onClick={() => HandleScrollToContact()}
//       >
//         Contact Us
//       </div>
//     </nav>
//   );
// }

import { Instagram, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/wisecrackBLACK-.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useState, useEffect } from "react";

gsap.registerPlugin(ScrollToPlugin);

const Navlinks = [
  { name: "About Us", path: "#about" },
  { name: "Our Work", path: "#work" },
  { name: "Our World", path: "#world" },
];

const HandleScrollToSection = (link) => {
  gsap.to(window, {
    duration: 2,
    scrollTo: link,
    ease: "power2.out",
  });
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMobileNavClick = (link) => {
    HandleScrollToSection(link);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-16 px-4 container mx-auto flex justify-between items-center font-BebasNeue text-xl tracking-wider relative z-50">
        {/* Mobile Hamburger */}
        <div
          className="flex flex-col items-center justify-center gap-2 lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="w-8 h-px bg-white transition-all duration-300" />
          <div className="w-8 h-px bg-white transition-all duration-300" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 tracking-tight">
          {Navlinks.map((link) => (
            <Link
              className="hover:text-accent transition-colors"
              key={link.name}
              to={link.path}
              onClick={() => HandleScrollToSection(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <p
          className="hover:text-accent flex items-center cursor-pointer transition-colors"
          onClick={() => HandleScrollToSection("#home")}
        >
          <img
            src={logo}
            alt="logo"
            className="object-cover object-center"
            height={80}
            width={80}
          />
          WiseCrack
        </p>

        {/* Instagram */}
        <div className="lg:hidden">
          <Link to="https://www.instagram.com/wisecrack_tpc/?hl=en">
            <Instagram className="hover:text-accent transition-colors" />
          </Link>
        </div>

        {/* Contact Button */}
        <button
          className="hover:text-accent hidden lg:block cursor-pointer transition-colors"
          onClick={() => HandleScrollToSection("#contact")}
        >
          Contact Us
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-[999]  duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-black/95 backdrop-blur-sm z-[999] text-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative h-full w-full">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white p-2 hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Mobile Menu Content */}
          <div className="relative flex flex-col justify-center items-end top-20 text-2xl font-BebasNeue">
            {Navlinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-accent transition-colors py-2 px-4"
                onClick={() => handleMobileNavClick(link.path)}
              >
                {link.name}
              </Link>
            ))}
            <button
              className="text-white hover:text-accent transition-colors py-2 px-4"
              onClick={() => {
                HandleScrollToSection("#contact");
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </button>
            <Link
              to="https://www.instagram.com/wisecrack_tpc/?hl=en"
              className="text-white hover:text-accent transition-colors py-2 px-4 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram size={24} />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
