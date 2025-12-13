import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./HeadlineComponent.css";

const HeadlineComponent = ({ onRoleChange }) => {
  const { theme } = useTheme();
  const isInitialMount = useRef(true);

  const roles = useMemo(
    () => [
      "Software Engineer",
      "Web Developer",
      "Full Stack Developer",
      "Programmer",
      "Problem Solver",
    ],
    []
  );

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Notify parent when role changes (skip initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (onRoleChange) {
      onRoleChange(roles[currentRoleIndex]);
    }
  }, [currentRoleIndex, onRoleChange, roles]);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const typingSpeed = isDeleting ? 70 : 150;
    const pauseTime = isDeleting ? 1000 : 3000;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setDisplayedRole(
        currentRole.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex, roles, onRoleChange]);

  return (
    <div className="headline-component">
      <h2 className="headline-text" style={{ color: theme.subheading }}>
        I Am <span className="role-text">{displayedRole}</span>
        <span className="cursor">|</span>
      </h2>
    </div>
  );
};

HeadlineComponent.propTypes = {
  onRoleChange: PropTypes.func,
};

export default HeadlineComponent;
