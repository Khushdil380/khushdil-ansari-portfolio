import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./HorizontalImage.css";

const HorizontalImage = ({ imagePath, alt = "Image", className = "" }) => {
  const { theme } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isImageLoaded) {
            setIsImageLoaded(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [isImageLoaded]);

  return (
    <div
      ref={imageRef}
      className={`horizontal-image-container ${className}`}
      style={{
        backgroundColor: theme.primaryBg,
      }}
    >
      {!isImageLoaded ? (
        <div
          className="horizontal-image-placeholder"
          style={{
            borderColor: theme.subheading,
          }}
        >
          <span style={{ color: theme.subheading }}>Loading...</span>
        </div>
      ) : (
        <img
          src={imagePath}
          alt={alt}
          className="horizontal-image"
          onLoad={() => setIsImageLoaded(true)}
        />
      )}
    </div>
  );
};

HorizontalImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default HorizontalImage;
