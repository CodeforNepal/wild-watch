import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 200);
    };

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
    <div className={`fixed bottom-4 right-4 ${isVisible ? "block" : "hidden"}`}>
      <button
        onClick={scrollToTop}
        className="bg-[#333333] text-white p-2 rounded-full cursor-pointer flex items-center"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ToTheTop;
