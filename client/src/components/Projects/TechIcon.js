import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./TechIcon.css";

const TechIcon = ({ techName, iconPath }) => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iconRef = useRef(null);

  // Get first letter or two for the icon placeholder
  const getIconText = (name) => {
    const words = name.split(/[\s.-]/);
    if (words.length > 1) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Reset loading state when iconPath changes
  useEffect(() => {
    if (iconPath) {
      setIsLoaded(false);
      setIsInView(false);
    } else {
      // No icon to load, consider it loaded
      setIsLoaded(true);
    }
  }, [iconPath]);

  useEffect(() => {
    if (!iconPath) return; // No need for observer if no icon

    // Use IntersectionObserver to detect when icon comes into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
      }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, [iconPath]);

  return (
    <div className="tech-icon" ref={iconRef}>
      <div
        className="tech-icon__circle"
        style={{
          borderColor: theme.subheading,
        }}
        title={techName}
      >
        {iconPath ? (
          <>
            {!isLoaded && (
              <div className="tech-icon__placeholder">
                <span style={{ color: theme.subheading }}>
                  {getIconText(techName)}
                </span>
              </div>
            )}
            {isInView && (
              <img
                src={iconPath}
                alt={techName}
                className={`tech-icon__img ${isLoaded ? "loaded" : ""}`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
              />
            )}
          </>
        ) : (
          <span style={{ color: theme.subheading }}>
            {getIconText(techName)}
          </span>
        )}
      </div>
    </div>
  );
};

TechIcon.propTypes = {
  techName: PropTypes.string.isRequired,
  iconPath: PropTypes.string,
};

export default TechIcon;
