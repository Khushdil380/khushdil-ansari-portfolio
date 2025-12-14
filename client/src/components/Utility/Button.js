import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}) => {
  const { theme } = useTheme();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant} ${
        disabled ? "button-disabled" : ""
      }`}
      style={{
        "--accent-color": theme.accent,
        "--content-color": theme.content,
        "--secondary-bg": theme.secondaryBg,
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
