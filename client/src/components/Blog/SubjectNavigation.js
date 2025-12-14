import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./SubjectNavigation.css";

const SubjectNavigation = ({ subjects, activeSubject, onSubjectChange }) => {
  const { theme } = useTheme();
  const tabsRef = useRef(null);

  const handlePrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = subjects.indexOf(activeSubject);
    if (currentIndex > 0) {
      onSubjectChange(subjects[currentIndex - 1]);
    }
    // Also scroll on mobile
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const currentIndex = subjects.indexOf(activeSubject);
    if (currentIndex < subjects.length - 1) {
      onSubjectChange(subjects[currentIndex + 1]);
    }
    // Also scroll on mobile
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className="subject-navigation"
      style={{ backgroundColor: theme.secondaryBg }}
    >
      <button
        className="subject-navigation__arrow subject-navigation__arrow--prev"
        onClick={handlePrevious}
        style={{
          color: theme.heading,
        }}
        aria-label="Scroll to previous subjects"
        type="button"
      >
        ◀
      </button>

      <div className="subject-navigation__tabs" ref={tabsRef}>
        {subjects.map((subject) => (
          <button
            key={subject}
            className={`subject-navigation__tab ${
              activeSubject === subject ? "subject-navigation__tab--active" : ""
            }`}
            onClick={() => onSubjectChange(subject)}
            style={{
              color: activeSubject === subject ? theme.heading : theme.content,
              backgroundColor:
                activeSubject === subject ? theme.primaryBg : "transparent",
              borderColor:
                activeSubject === subject ? theme.accent : "transparent",
            }}
          >
            {subject}
          </button>
        ))}
      </div>

      <button
        className="subject-navigation__arrow subject-navigation__arrow--next"
        onClick={handleNext}
        style={{
          color: theme.heading,
        }}
        aria-label="Scroll to next subjects"
        type="button"
      >
        ▶
      </button>
    </div>
  );
};

SubjectNavigation.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSubject: PropTypes.string.isRequired,
  onSubjectChange: PropTypes.func.isRequired,
};

export default SubjectNavigation;
