import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./ArrowButton.css";

const ArrowButton = ({ direction, onClick, disabled }) => {
  const { theme } = useTheme();

  return (
    <button
      className={`arrow-button arrow-button--${direction}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        borderColor: theme.subheading,
        color: theme.subheading,
      }}
      aria-label={direction === "left" ? "Previous project" : "Next project"}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ArrowButton;
