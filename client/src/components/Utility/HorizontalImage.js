import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./HorizontalImage.css";

const HorizontalImage = ({
  imagePath,
  alt = "Image",
  className = "",
  loading = "lazy",
  preload = false,
}) => {
  const { theme } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(preload);
  const imageRef = useRef(null);

  // Reset loading state when imagePath changes
  useEffect(() => {
    setIsImageLoaded(false);
    if (preload) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, [imagePath, preload]);

  useEffect(() => {
    if (preload) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" },
    );

    const currentRef = imageRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [imagePath, preload]);

  return (
    <div
      ref={imageRef}
      className={`horizontal-image-container ${className}`}
      style={{
        backgroundColor: theme.primaryBg,
      }}
    >
      {isInView && (
        <img
          src={imagePath}
          alt={alt}
          className={`horizontal-image ${isImageLoaded ? "loaded" : ""}`}
          loading={loading}
          onLoad={() => setIsImageLoaded(true)}
        />
      )}
      {!isImageLoaded && (
        <div
          className="horizontal-image-placeholder"
          style={{
            backgroundColor: theme.secondaryBg,
          }}
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
