import React from "react";
import PropTypes from "prop-types";
import "./RequestResumeButton.css";
import "./AnimatedBorder.css";

const RequestResumeButton = ({ onClick }) => {
  return (
    <button
      className="resume-request-button animated-border"
      onClick={onClick}
      aria-label="Request Resume"
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
