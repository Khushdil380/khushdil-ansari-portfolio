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
  href,
  target,
  rel,
}) => {
  const { theme } = useTheme();

  const className = `button button-${variant} ${
    disabled ? "button-disabled" : ""
  }`;

  const style = {
    "--accent-color": theme.accent,
    "--content-color": theme.content,
    "--secondary-bg": theme.secondaryBg,
  };

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={className}
        style={style}
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
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
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;
