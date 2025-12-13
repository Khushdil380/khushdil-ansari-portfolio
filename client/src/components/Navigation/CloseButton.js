import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./CloseButton.css";

const CloseButton = ({ onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className="close-button"
      aria-label="Close menu"
      style={{
        "--content-color": theme.content,
        "--accent-color": theme.accent,
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="5"
          y1="5"
          x2="25"
          y2="25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="5"
          x2="5"
          y2="25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
