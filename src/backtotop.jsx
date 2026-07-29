import React, { useState, useEffect } from "react";
import "./backtotop.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}

export default BackToTop;