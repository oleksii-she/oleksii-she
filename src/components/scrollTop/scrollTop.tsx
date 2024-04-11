"use client";
import { useState, useEffect } from "react";
import { ArrowTop } from "../icons";
export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const ScrollY = window.scrollY;
    if (ScrollY > 1600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className={isVisible ? "scroll-top" : "scroll-top---hidden"}
      aria-label="scroll up"
    >
      <ArrowTop className="icon-scroll" />
    </button>
  );
};
