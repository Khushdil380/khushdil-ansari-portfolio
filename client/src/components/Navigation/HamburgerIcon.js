import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./HamburgerIcon.css";

const HamburgerIcon = ({ onClick, isOpen = false }) => {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`hamburger-icon ${isOpen ? "open" : ""}`}
      style={{
        "--content-color": theme.content,
        "--accent-color": theme.accent,
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

HamburgerIcon.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default HamburgerIcon;
