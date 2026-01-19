import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../context/ThemeContext";
import "./RequestResumeButton.css";
import "./AnimatedBorder.css";

const RequestResumeButton = ({ onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      className="resume-request-button animated-border"
      onClick={onClick}
      aria-label="Request Resume"
      style={{
        "--accent-color": theme.accent,
        "--heading-color": theme.heading,
        "--primary-bg": theme.primaryBg,
      }}
    >
      <img
        src="/resume-request.gif"
        alt="Request Resume"
        className="resume-request-gif"
      />
    </button>
  );
};

RequestResumeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RequestResumeButton;
