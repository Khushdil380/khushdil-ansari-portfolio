import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./DescriptionComponent.css";

const DescriptionComponent = ({ currentRole = "Web Developer" }) => {
  const { theme } = useTheme();

  const descriptions = {
    "Web Developer":
      "I design and develop responsive websites and web applications using HTML, CSS, JavaScript, and modern frameworks.",

    "Android Developer":
      " I build high-performance Android applications using Java and Kotlin, with a focus on user experience and material design.",
    
    "Problem Solver":
      " I tackle complex coding challenges, applying logical thinking and algorithmic skills to create efficient solutions.",
    
    "Database Administrator":
      "I design, implement, and manage relational databases, ensuring data integrity, security, and optimal performance.",
  };

  const currentDescription =
    descriptions[currentRole] || descriptions["Software Engineer"];

  return (
    <div className="description-component">
      <p className="description-text" style={{ color: theme.content }}>
        {currentDescription}
      </p>
    </div>
  );
};

DescriptionComponent.propTypes = {
  currentRole: PropTypes.string,
};

export default DescriptionComponent;
