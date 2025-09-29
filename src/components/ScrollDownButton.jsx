import React, { useState, useEffect } from "react";

const ScrollDownButton = () => {
  const [direction, setDirection] = useState("down");
  const SCROLL_AMOUNT = 1000; // Amount to scroll in pixels

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // If near bottom, show up button
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setDirection("up");
      }
      // If near top, show down button
      else if (scrollTop < 100) {
        setDirection("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if (direction === "down") {
      // Scroll down 500px, but don't overflow
      const maxScroll = documentHeight - windowHeight;
      const targetScroll = Math.min(currentScroll + SCROLL_AMOUNT, maxScroll);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    } else {
      // Scroll up 500px, but don't go below 0
      const targetScroll = Math.max(currentScroll - SCROLL_AMOUNT, 0);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-10 right-10 z-50 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 cursor-pointer"
    >
      {/* {direction === "up" ? "↑ Up" : "↓ Down"} */}
      {direction === "up" ? "↑ Up" : "↓ Down"}
    </button>
  );
};

export default ScrollDownButton;
