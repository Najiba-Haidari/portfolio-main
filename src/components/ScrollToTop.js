import React, { useState, useEffect } from "react";
import { FiChevronsUp } from "react-icons/fi";


const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FiChevronsUp
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;