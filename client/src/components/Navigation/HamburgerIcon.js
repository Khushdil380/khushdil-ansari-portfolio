import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./HamburgerIcon.css";

const HamburgerIcon = ({ onClick, isOpen }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`hamburger-icon ${isOpen ? "open" : ""}`}
      aria-label="Toggle menu"
      style={{
        "--content-color": theme.content,
        "--accent-color": theme.accent,
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

HamburgerIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

HamburgerIcon.defaultProps = {
  isOpen: false,
};

export default HamburgerIcon;
