import React from "react";
import { useTheme } from "../../context/ThemeContext";
import PropTypes from "prop-types";
import "./SocialIcon.css";

// Import SVG icons
import GitHubIcon from "../../assets/icons/github.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import EmailIcon from "../../assets/icons/email.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp.svg";
import MediumIcon from "../../assets/icons/medium.svg";
import QuoraIcon from "../../assets/icons/quora.svg";
import XIcon from "../../assets/icons/x.svg";

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
  WhatsApp: WhatsAppIcon,
  Medium: MediumIcon,
  Quora: QuoraIcon,
  X: XIcon,
};

const SocialIcon = ({ platform, url }) => {
  const { theme, isDarkMode } = useTheme();
  const IconSrc = iconMap[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon ${isDarkMode ? "dark-mode" : "light-mode"}`}
      aria-label={platform}
      style={{
        "--accent-color": theme.accent,
        "--content-color": theme.content,
      }}
    >
      {IconSrc && (
        <img src={IconSrc} alt={platform} className="social-icon-img" />
      )}
    </a>
  );
};

SocialIcon.propTypes = {
  platform: PropTypes.oneOf([
    "GitHub",
    "LinkedIn",
    "Email",
    "WhatsApp",
    "Medium",
    "Quora",
    "X",
  ]).isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialIcon;
