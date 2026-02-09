import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./HorizontalImage.css";

const HorizontalImage = ({ imagePath, alt = "Image", className = "", loading = "lazy", preload = false }) => {
  const { theme } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(preload);
  const imageRef = useRef(null);

  useEffect(() => {
    // Skip observer if preload is true (eager loading)
    if (preload) {
      setIsImageLoaded(true);
      return;
    }

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
  }, [isImageLoaded, preload]);

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
          loading={loading}
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
  loading: PropTypes.oneOf(["lazy", "eager"]),
  preload: PropTypes.bool,
};

export default HorizontalImage;
