import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Preloader.css";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Show loader animation after name flash
    const loaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    // Hide preloader completely
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader" style={{ backgroundColor: theme.primaryBg }}>
      <div className="preloader-content">
        {!showLoader ? (
          <div className="name-flash">Khushdil Ansari</div>
        ) : (
          <div className="loader">
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
            <div className="l"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preloader;
