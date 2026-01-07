import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader once component mounts (React app is ready)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="spinner"></div>
        <div className="preloader-text">
          Loading<span className="preloader-dots"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
