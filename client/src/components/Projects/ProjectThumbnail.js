import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./ProjectThumbnail.css";

const ProjectThumbnail = ({ project }) => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Reset loading state when thumbnail changes (project switch)
  useEffect(() => {
    setIsLoaded(false);
    setIsInView(false);
  }, [project.thumbnail]);

  useEffect(() => {
    // Use IntersectionObserver to detect when image comes into viewport
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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [project.thumbnail]);

  return (
    <div className="project-thumbnail">
      <div ref={imgRef} className="project-thumbnail__image-container">
        {isInView && (
          <img
            src={project.thumbnail}
            alt={`${project.name} thumbnail`}
            className={`project-thumbnail__image ${isLoaded ? "loaded" : ""}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        )}
        {!isLoaded && (
          <div
            className="project-thumbnail__placeholder"
            style={{ backgroundColor: theme.secondaryBg }}
          />
        )}
      </div>

      <div className="project-thumbnail__metadata">
        <div
          className="project-thumbnail__duration"
          style={{ color: theme.content }}
        >
          {project.startDate} - {project.endDate}
        </div>

        <div className="project-thumbnail__info-row">
          <div
            className="info-badge category-badge"
            style={{
              borderColor: theme.subheading,
              color: theme.content,
            }}
          >
            {project.category}
          </div>

          <div
            className="info-badge duration-badge"
            style={{
              borderColor: theme.subheading,
              color: theme.content,
            }}
          >
            {project.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectThumbnail.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectThumbnail;
