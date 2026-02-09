import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ProfilePicture.css";

const ProfilePicture = ({ imagePath = "/profile/profile-on-hero.gif" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to detect when image is in viewport
  useEffect(() => {
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
        rootMargin: "50px", // Start loading slightly before visible
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle image load complete
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="profile-picture-container" ref={containerRef}>
      <div className="profile-picture">
        {/* Placeholder skeleton */}
        {!isLoaded && <div className="profile-skeleton" />}

        {/* Actual image - only load when in view */}
        {isInView && (
          <img
            ref={imgRef}
            src={imagePath}
            alt="Profile"
            className={`profile-image ${isLoaded ? "loaded" : "loading"}`}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  imagePath: PropTypes.string,
};

export default ProfilePicture;
